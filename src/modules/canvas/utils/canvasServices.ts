import type { canvas, coordinates, Point } from '@/types/canvasTypes'
import { useEffect, useState } from 'react'

export const usePressedKeys = () => {
  const [pressedKeys, setPressedKeys] = useState(new Set())

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setPressedKeys((prevKeys) => new Set(prevKeys).add(event.key))
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      setPressedKeys((prevKeys) => {
        const updatedKeys = new Set(prevKeys)
        updatedKeys.delete(event.key)
        return updatedKeys
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return pressedKeys
}
export const getSvgPathFromStroke = (stroke: number[][]) => {
  if (!stroke.length) return ''

  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length]
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2)
      return acc
    },
    ['M', ...stroke[0], 'Q']
  )

  d.push('Z')
  return d.join(' ')
}

export const inputDivText = (e: Event) => {
  const divTextFalse = document.getElementById('divTextFalse') as HTMLElement
  const Target = e.target as HTMLElement
  const divNumber = Target.parentElement?.children[0]
  divTextFalse.innerHTML = Target.innerHTML
  const childrens = Target.children.length
  if (divNumber) {
    divNumber.innerHTML = '1'
    for (let i = 0; i < childrens; i++) {
      divNumber.innerHTML += `<div>${i + 2}</div>`
    }
  }
}

export const distance = (a: Point, b: Point) => {
  const result = Math.sqrt(a.x - b.x ** 2 + (a.y - b.y ** 2))
  return result
}
export const onLine = (x1: number, y1: number, x2: number, y2: number, clientX: number, clientY: number, maxDistance = 1) => {
  const a = { x: x1, y: y1 }
  const b = { x: x2, y: y2 }
  const c = { x: clientX, y: clientY }
  const offset = distance(a, b) - (distance(a, c) + distance(b, c))
  return Math.abs(offset) < maxDistance ? 'inside' : null
}
export const nearPoint = (clientX: number, clientY: number, x1: number, y1: number, name: string) => {
  return Math.abs(clientX - x1) < 5 && Math.abs(clientY - y1) < 5 ? name : null
}

export const positionWithinElement = (clientX: number, clientY: number, element: canvas) => {
  const { type, x1, y1, x2, y2 } = element
  switch (type) {
    case 'line': {
      const on = onLine(x1, y1, x2, y2, clientX, clientY)
      const start = nearPoint(clientX, clientY, x1, y1, 'start')
      const end = nearPoint(clientX, clientY, x2, y2, 'end')

      return start || end || on
    }
    case 'image':
    case 'circle':
    case 'triangle':
    case 'rectangle': {
      const topLeft = nearPoint(clientX, clientY, x1, y1, 'tl')
      const topRight = nearPoint(clientX, clientY, x2, y1, 'tr')
      const bottomLeft = nearPoint(clientX, clientY, x1, y2, 'bl')
      const bottomRight = nearPoint(clientX, clientY, x2, y2, 'br')
      const inside = clientX >= x1 && clientX <= x2 && clientY >= y1 && clientY <= y2 ? 'inside' : null
      return topLeft || topRight || bottomLeft || bottomRight || inside
    }

    case 'pencil': {
      if (element.points) {
        const betweenAnyPoint = element.points.some((point, index) => {
          const nextPoint = (element.points as Point[])[index + 1]
          if (!nextPoint) return false
          return onLine(point.x, point.y, nextPoint.x, nextPoint.y, clientX, clientY, 5) != null
        })
        return betweenAnyPoint ? 'inside' : null
      }
      return
    }

    case 'text':
    case 'textList':
      return clientX >= x1 && clientX <= x2 && clientY >= y1 && clientY <= y2 ? 'inside' : null

    default:
      throw new Error(`Type not recognised: ${type}`)
  }
}

export const cursorForPosition = (position: string) => {
  switch (position) {
    case 'tl':
    case 'br':
    case 'start':
    case 'end':
      return 'nwse-resize'
    case 'tr':
    case 'bl':
      return 'nesw-resize'
    default:
      return 'move'
  }
}

export const resizedCoordinates = (clientX: number, clientY: number, position: string, coordinates: coordinates) => {
  const { x1, y1, x2, y2 } = coordinates
  switch (position) {
    case 'tl':
    case 'start':
      return { x1: clientX, y1: clientY, x2, y2 }
    case 'tr':
      return { x1, y1: clientY, x2: clientX, y2 }
    case 'bl':
      return { x1: clientX, y1, x2, y2: clientY }
    case 'br':
    case 'end':
      return { x1, y1, x2: clientX, y2: clientY }
    default:
      return null //should not really get here...
  }
}
export const adjustElementCoordinates = (element: canvas) => {
  const { type, x1, y1, x2, y2 } = element
  if (type === 'rectangle') {
    const minX = Math.min(x1, x2)
    const maxX = Math.max(x1, x2)
    const minY = Math.min(y1, y2)
    const maxY = Math.max(y1, y2)
    return { x1: minX, y1: minY, x2: maxX, y2: maxY }
  }
  if (x1 < x2 || (x1 === x2 && y1 < y2)) {
    return { x1, y1, x2, y2 }
  }
  return { x1: x2, y1: y2, x2: x1, y2: y1 }
}
