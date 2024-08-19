export const AddClass = (element: HTMLElement, values: string) => {
  const classes = values.split(' ')
  for (const i of classes) {
    element.classList.add(i)
  }
}

export const RemoveClass = (element: HTMLElement, values: string) => {
  const classes = values.split(' ')
  for (const i of classes) {
    element.classList.remove(i)
  }
}
