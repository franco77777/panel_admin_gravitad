export const CreateElement = (type: string, classes: string) => {
  const Element = document.createElement(type)
  const ClassArray = classes.split(' ')
  if (classes) {
    for (const clas of ClassArray) {
      Element.classList.add(clas)
    }
  }

  return Element
}

export const AddClass = (id: string, classes: string[]) => {
  const targetElement = document.getElementById(id)
  for (const value of classes) {
    targetElement?.classList.add(value)
  }
}

export const RemoveClass = (id: string, classes: string[]) => {
  const targetElement = document.getElementById(id)
  for (const value of classes) {
    targetElement?.classList.remove(value)
  }
}
