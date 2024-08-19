import { UsersRound } from 'lucide-react'
import type React from 'react'
import type { propProfileTask, task } from '../../types'

const TaskResponsible = ({ taskSelected }: propProfileTask) => {
  const clickResponsible = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    //const containerLi = target.closest("li") as HTMLElement;
    const modalResponsible = document.getElementById('modalResponsible') as HTMLElement
    console.log('modalsdsssss', modalResponsible)

    modalResponsible.classList.toggle('pointer-events-none')
    modalResponsible.classList.toggle('hidden')
    target.appendChild(modalResponsible)
    //console.log("containerLi", containerLi);
  }
  const disableEslint = () => {}
  return (
    <li className="flex items-start">
      <div className="flex gap-2 items-center w-40">
        <UsersRound size={16} />
        <div>Responsible</div>
      </div>
      <div
        onKeyDown={disableEslint}
        onClick={(e) => clickResponsible(e)}
        className="hover:scale-105 duration-150 cursor-pointer flex flex-col gap-2"
      >
        {taskSelected?.responsible ? taskSelected.responsible : 'Add responsible'}
      </div>
    </li>
  )
}

export default TaskResponsible
