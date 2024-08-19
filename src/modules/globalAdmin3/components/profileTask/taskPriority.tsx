import { CircleParking } from 'lucide-react'
import type { taskProfile } from '../../types'
import { priorityState } from '../../utils/ga3states'
import { BgDarker } from '@/theme/theming'

const TaskPriority = ({ taskSelected, tasks, setTasks }: taskProfile) => {
  const clickPriority = () => {
    const id = document.getElementById('priorityModal') as HTMLElement
    if (id.classList.contains('flex')) {
      id.classList.remove('flex')
      id.classList.add('hidden')
    } else {
      id.classList.remove('hidden')
      id.classList.add('flex')
    }
  }
  const clickOption = (priority: string) => {
    const taskCopy = [...tasks]
    const current = taskCopy.find((e) => e.id === taskSelected.id)

    if (current) {
      current.priority = priority
      setTasks(taskCopy)
      clickPriority()
    }
  }

  const disableEslint = () => {}
  return (
    <div className="flex items-center relative">
      <div className="flex gap-2 w-40 items-center">
        <CircleParking size={16} />
        <div>Priority</div>
      </div>
      <div onKeyDown={disableEslint} onClick={() => clickPriority()} className="hover:scale-105 duration-150 cursor-pointer">
        {taskSelected?.priority ? taskSelected.priority : 'Void'}
      </div>
      <ul
        id="priorityModal"
        style={{ backgroundColor: BgDarker() }}
        className="hidden flex-col gap-2 absolute left-40 top-7 z-50"
      >
        {taskSelected?.priority !== priorityState.low && (
          <li
            onKeyDown={disableEslint}
            onClick={() => clickOption(priorityState.low)}
            className="hover:scale-105 duration-150 cursor-pointer text-nowrap"
          >
            {priorityState.low}
          </li>
        )}
        {taskSelected?.priority !== priorityState.medium && (
          <li
            onKeyDown={disableEslint}
            onClick={() => clickOption(priorityState.medium)}
            className="hover:scale-105 duration-150 cursor-pointer"
          >
            {priorityState.medium}
          </li>
        )}
        {taskSelected?.priority !== priorityState.high && (
          <li
            onKeyDown={disableEslint}
            onClick={() => clickOption(priorityState.high)}
            className="hover:scale-105 duration-150 cursor-pointer"
          >
            {priorityState.high}
          </li>
        )}
      </ul>
    </div>
  )
}

export default TaskPriority
