import { MoveUpRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import type { task, taskProfile } from '../../types'
import { storeTask } from '@/store/globalAdmin3/taskStore'
export interface props {
  taskSelected: task
  tasks: task[]
}
const TaskBlocking = ({ taskSelected, tasks }: props) => {
  const setTaskSelected = storeTask((state) => state.setTaskSelected)
  const [blockingTask, setBlockingTask] = useState<task[]>()
  useEffect(() => {
    const taskBlockingSearched: task[] = []
    const taskCopy = [...tasks]
    for (const element of taskCopy) {
      for (const e of element.blocked) {
        if (e === taskSelected.id) {
          taskBlockingSearched.push(element)
        }
      }
    }
    setBlockingTask(taskBlockingSearched)
  }, [taskSelected, tasks])
  const clickTaskBlocking = (id: number) => {
    const copytasks = [...tasks]
    const current = copytasks.find((e) => e.id === id)
    if (current) setTaskSelected(current)
  }
  const disableEslint = () => {}
  return (
    <div className="flex items-start relative">
      <div className="flex gap-2 w-40 items-center">
        <MoveUpRight size={16} />
        <div>Blocking</div>
      </div>
      <ul className="flex flex-col gap-2">
        {blockingTask?.map((e) => (
          <li
            className="cursor-pointer hover:scale-105  duration-150"
            onKeyDown={disableEslint}
            onClick={() => clickTaskBlocking(e.id)}
            key={e.id}
          >
            {e.task}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskBlocking
