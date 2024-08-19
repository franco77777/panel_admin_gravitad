export interface colorOptions {
  color: string
  setColor: React.Dispatch<React.SetStateAction<string>>
}
export interface toolProps extends setToolProps {
  tool: string
}

export interface setToolProps {
  setTool: React.Dispatch<React.SetStateAction<string>>
}

export interface lineOptionsProps {
  tool: string
  colorLine: string
  setColorLine: React.Dispatch<React.SetStateAction<string>>
  setLineWidth: React.Dispatch<React.SetStateAction<number>>
}

export interface pencilProps {
  tool: string
  colorPencil: string
  setColorPencil: React.Dispatch<React.SetStateAction<string>>
  setPencilWidth: React.Dispatch<React.SetStateAction<number>>
}

export interface shapeProps {
  tool: string
  colorShape: string
  setColorShape: React.Dispatch<React.SetStateAction<string>>
  setFillStyle: React.Dispatch<React.SetStateAction<boolean>>
  fillStyle: boolean
  setTool: React.Dispatch<React.SetStateAction<string>>
}

export interface textProps {
  tool: string
  colorText: string
  setColorText: React.Dispatch<React.SetStateAction<string>>
  setTextSize: React.Dispatch<React.SetStateAction<number>>
  textSize: number
  setTool: React.Dispatch<React.SetStateAction<string>>
}

export interface Point {
  x: number
  y: number
}
export interface canvas {
  x1: number
  y1: number
  x2: number
  y2: number
  id: number
  type: string
  text?: string
  text2?: string | undefined
  fillStyle?: string | undefined
  color?: string
  lineWidth?: number
  colorPencil?: string
  pencilWidth?: number
  points?: Point[]
  size?: number | undefined
  src?: string
  focus: boolean
}

export interface SelectedElement {
  focus: boolean
  x1: number
  y1: number
  x2: number
  y2: number
  id: number
  type: string
  text?: string
  text2?: string | undefined
  fillStyle?: string | undefined
  color?: string
  lineWidth?: number
  colorPencil?: string
  pencilWidth?: number
  points?: Point[]
  size?: number | undefined
  src?: string
  xOffsets?: number[]
  yOffsets?: number[]
  offsetX?: number
  offsetY?: number
  position?: string | null
}

export interface coordinates {
  x1: number
  y1: number
  x2: number
  y2: number
}
