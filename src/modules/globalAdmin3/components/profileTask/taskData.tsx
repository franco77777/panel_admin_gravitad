import type React from 'react'
import type { taskProfile } from '../../types'

const TaskData = ({ taskSelected, tasks, setTasks }: taskProfile) => {
  const blurTaskDataProfile = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    const divTask = e.target as HTMLElement
    const value = divTask.innerText

    if (taskSelected) {
      const copyTasks = [...tasks]
      const modifyngTask = copyTasks.find((e) => e.id === taskSelected.id)
      if (modifyngTask) {
        modifyngTask.task = value
        setTasks(copyTasks)
      }
    }
  }
  const oninputTaskDataProfile = (e: React.FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    const taskBoard = document.getElementById(`task-${taskSelected.id}`) as HTMLElement
    const value = target.innerText
    taskBoard.innerText = value
  }
  return (
    <li className="flex gap-2  ">
      <img src="https://www.notion.so/icons/clipping_lightgray.svg?mode=dark" alt="file" className="w-10 h-10 text-white" />
      <div
        id="taskProfileData"
        contentEditable
        onInput={(e) => oninputTaskDataProfile(e)}
        onBlur={(e) => blurTaskDataProfile(e)}
        //onKeyDown={(e) => keydownTask(e)}
        //onInput={(e) => changeTask(e)}
        className="text-3xl break-all outline-none shadow-none"
      >
        {taskSelected?.task}
      </div>
    </li>
  )
}

export default TaskData
