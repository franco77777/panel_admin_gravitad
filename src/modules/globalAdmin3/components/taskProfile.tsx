import { storeTask } from '@/store/globalAdmin3/taskStore'
import file from '../icons/file.svg'
import type React from 'react'
import { CalendarX, Loader, UsersRound } from 'lucide-react'
import DatePicker from 'react-datepicker'
import TaskData from './profileTask/taskData'
import type { task } from '../types'
import TaskResponsible from './profileTask/taskResponsible'
import TaskDeadline from './profileTask/taskDeadline'
import TaskLifetime from './profileTask/taskLifetime'
import TaskPriority from './profileTask/taskPriority'
import TaskBlocked from './profileTask/taskBlocked'
import TaskBlocking from './profileTask/taskBlocking'

const TaskProfile = () => {
  const taskSelected = storeTask((state) => state.taskSelected)
  const setTasks = storeTask((state) => state.setTasks)
  const tasks = storeTask((state) => state.tasks)

  return (
    <ul className="w-[80%] mx-auto mt-4 flex flex-col gap-4">
      {taskSelected && (
        <>
          <TaskData taskSelected={taskSelected as task} tasks={tasks} setTasks={setTasks} />
          <TaskResponsible taskSelected={taskSelected as task} />
          <TaskDeadline taskSelected={taskSelected as task} tasks={tasks} setTasks={setTasks} />
          <TaskLifetime taskSelected={taskSelected as task} tasks={tasks} setTasks={setTasks} />
          <TaskPriority taskSelected={taskSelected as task} tasks={tasks} setTasks={setTasks} />
          <TaskBlocked taskSelected={taskSelected as task} tasks={tasks} setTasks={setTasks} />
          <TaskBlocking taskSelected={taskSelected as task} tasks={tasks} />
        </>
      )}
    </ul>
  )
}

export default TaskProfile
