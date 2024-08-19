import type { tasks } from '@/modules/administration/utils/administrationTypes'
import { Bg, BgDarker, Primary, SecondaryGradientExist } from '@/theme/theming'

import { CircleX } from 'lucide-react'

import { useState } from 'react'
export interface prop {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  setTasks: React.Dispatch<React.SetStateAction<tasks[]>>
}
const ModalTask = ({ setModal, setTasks }: prop) => {
  const [nameTask, setNameTask] = useState('')
  const submitTask = () => {
    const newTask = {
      name: nameTask,
    }
    setTasks((state) => [...state, newTask])
    setModal(false)
  }
  return (
    <div
      style={{ backgroundColor: BgDarker(), borderColor: Primary() }}
      className="z-50 modalAnimation text-lg font-medium 
      flex-col flex gap-2 w-[min(100%,300px)] rounded-lg p-2 absolute top-1/2 
      left-1/2 -translate-x-1/2 -translate-y-1/2 border-[1px]"
    >
      <CircleX onClick={() => setModal(false)} className="absolute top-2 right-2 hover:scale-125 cursor-pointer duration-150" />
      <div className="flex flex-col mt-2">
        <div>Task Name</div>
        <input
          onChange={(e) => setNameTask(e.target.value)}
          value={nameTask}
          style={{ backgroundColor: Bg() }}
          type="text"
          className="h-7 rounded-lg border-0 outline-0"
        />
      </div>
      <div className="flex flex-col ">
        <div>Assigned Person</div>
        <input style={{ backgroundColor: Bg() }} type="text" className="h-7 rounded-lg border-0 outline-0" />
      </div>
      <div className="flex flex-col ">
        <div>Start Date</div>
        <input style={{ backgroundColor: Bg() }} type="text" className="h-7 rounded-lg border-0 outline-0" />
      </div>
      <div className="flex flex-col ">
        <div>End Date</div>
        <input style={{ backgroundColor: Bg() }} type="text" className="h-7 rounded-lg border-0 outline-0" />
      </div>
      <div className="flex flex-col ">
        <div>Priority</div>
        <input style={{ backgroundColor: Bg() }} type="text" className="h-7 rounded-lg border-0 outline-0" />
      </div>
      <div className="flex flex-col ">
        <div>Description</div>
        <textarea style={{ backgroundColor: Bg() }} className="h-12 rounded-lg border-0 outline-0 w-full" />
      </div>
      <div className="flex flex-col ">
        <div>Sub Tasks</div>
        <textarea style={{ backgroundColor: Bg() }} className="h-12 rounded-lg border-0 outline-0 w-full" />
      </div>
      <button
        type="button"
        style={{
          background: SecondaryGradientExist(),
          color: Primary() === '#000000' ? '#ffffff' : '#000000',
        }}
        onClick={() => submitTask()}
        className="rounded-lg font-semibold hover:scale-105 duration-150"
      >
        add task
      </button>
    </div>
  )
}
export default ModalTask
