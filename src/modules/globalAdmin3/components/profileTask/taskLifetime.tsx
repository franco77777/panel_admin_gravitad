import { Loader } from 'lucide-react'

import type { taskProfile } from '../../types'

import { lifetimeState } from '../../utils/ga3states'
import { BgDarker } from '@/theme/theming'

const TaskLifetime = ({ taskSelected, tasks, setTasks }: taskProfile) => {
  const clickLifetime = () => {
    const id = document.getElementById('lifetimeModal') as HTMLElement
    if (id.classList.contains('flex')) {
      id.classList.remove('flex')
      id.classList.add('hidden')
    } else {
      id.classList.remove('hidden')
      id.classList.add('flex')
    }
  }
  const clickOption = (lifetime: string) => {
    const taskCopy = [...tasks]
    const current = taskCopy.find((e) => e.id === taskSelected.id)

    if (current) {
      current.lifetime = lifetime
      setTasks(taskCopy)
      clickLifetime()
    }
  }
  const disableEslint = () => {}
  return (
    <li className="w-fit  flex relative items-center">
      <div className="flex gap-2 items-center w-40">
        <Loader size={16} />
        <div>State</div>
      </div>
      <div onKeyDown={disableEslint} onClick={() => clickLifetime()} className="hover:scale-105 duration-150 cursor-pointer">
        {taskSelected?.lifetime}
      </div>
      <ul
        id="lifetimeModal"
        style={{ backgroundColor: BgDarker() }}
        className="hidden flex-col gap-2 absolute left-40 top-7 z-50"
      >
        {taskSelected?.lifetime !== lifetimeState.whitoutStarting && (
          <li
            onKeyDown={disableEslint}
            onClick={() => clickOption(lifetimeState.whitoutStarting)}
            className="hover:scale-105 duration-150 cursor-pointer text-nowrap"
          >
            {lifetimeState.whitoutStarting}
          </li>
        )}
        {taskSelected?.lifetime !== lifetimeState.inProgress && (
          <li
            onKeyDown={disableEslint}
            onClick={() => clickOption(lifetimeState.inProgress)}
            className="hover:scale-105 duration-150 cursor-pointer"
          >
            {lifetimeState.inProgress}
          </li>
        )}
        {taskSelected?.lifetime !== lifetimeState.completed && (
          <li
            onKeyDown={disableEslint}
            onClick={() => clickOption(lifetimeState.completed)}
            className="hover:scale-105 duration-150 cursor-pointer"
          >
            {lifetimeState.completed}
          </li>
        )}
        {taskSelected?.lifetime !== lifetimeState.filed && (
          <li
            onKeyDown={disableEslint}
            onClick={() => clickOption(lifetimeState.filed)}
            className="hover:scale-105 duration-150 cursor-pointer"
          >
            {lifetimeState.filed}
          </li>
        )}
      </ul>
    </li>
  )
}

export default TaskLifetime
