import { storeTask } from '@/store/globalAdmin3/taskStore'
import { Primary } from '@/theme/theming'
import type React from 'react'

const ModalResponsible = () => {
  const taskSelected = storeTask((state) => state.taskSelected)
  const setTasks = storeTask((state) => state.setTasks)
  const tasks = storeTask((state) => state.tasks)
  const clickOption = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    const page = document.getElementById('page') as HTMLElement
    const modalResponsible = document.getElementById('modalResponsible') as HTMLElement

    if (taskSelected) {
      const copyTasks = [...tasks]
      const currentTask = copyTasks.find((e) => e.id === taskSelected.id)
      if (currentTask) {
        currentTask.responsible = target.innerText
        modalResponsible.classList.add('pointer-events-none')
        modalResponsible.classList.add('hidden')
        page.appendChild(modalResponsible)
        setTasks(copyTasks)
      }
    }
  }
  const disableEslint = () => {}
  return (
    <div
      id="modalResponsible"
      style={{ borderColor: Primary(), color: Primary() }}
      className="w-max rounded-lg border-[1px] p-2 pointer-events-none hidden"
    >
      <ul className="flex flex-col gap-2">
        <li onKeyDown={disableEslint} onClick={(e) => clickOption(e)} className="cursor-pointer hover:scale-105 duration-150">
          responsible example
        </li>
        <li onKeyDown={disableEslint} onClick={(e) => clickOption(e)} className="cursor-pointer hover:scale-105 duration-150">
          responsible example2
        </li>
        <li onKeyDown={disableEslint} onClick={(e) => clickOption(e)} className="cursor-pointer hover:scale-105 duration-150">
          responsible example3
        </li>
      </ul>
    </div>
  )
}

export default ModalResponsible
