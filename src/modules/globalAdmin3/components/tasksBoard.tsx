import type { tasks } from "@/modules/administration/utils/administrationTypes";
import { BgDarker, SecondaryGradientExist } from "@/theme/theming";
import { Plus } from "lucide-react";
import { dragenterUL, dragoverUL } from "../utils/services";

import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Task from "./task";

import { storeTask } from "@/store/globalAdmin3/taskStore";
import type { task } from "../types";
import ModalResponsible from "./modalResponsible";
import { lifetimeState } from "../utils/ga3states";

export interface props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  tasks: tasks[];
}
const Tasks = () => {
  const tasks = storeTask((state) => state.tasks);
  const setTasks = storeTask((state) => state.setTasks);
  const setTaskSelected = storeTask((state) => state.setTaskSelected);
  const [countTask, setCountTask] = useState(0);

  const addTask = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    value: string
  ) => {
    const target = e.target as HTMLElement;

    const taskContainer = target.closest("[data-task]") as HTMLElement;
    const taskUL = taskContainer.querySelector("[data-ul]") as HTMLElement;
    console.log("task", taskUL);
    const newTask: task = {
      id: countTask + 1,
      task: "New Task",
      date: new Date(),
      lifetime: value,
      blocked: [],
      page: [],
    };
    setTasks([newTask, ...tasks]);
    setTaskSelected(newTask);
    setCountTask((prev) => prev + 1);
    setTimeout(() => {
      const taskCreated = document.getElementById(
        `task-${countTask + 1}`
      ) as HTMLElement;
      taskCreated.contentEditable = "true";
      const range = document.createRange();
      const sel = window.getSelection();
      const value = taskCreated.innerText.length;
      range.setStart(taskCreated.childNodes[0], value);
      range.collapse(true);
      if (sel) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
      taskCreated.focus();
    }, 0);
  };

  return (
    <>
      <div className="w-full rounded-2xl">
        <div
          style={{
            background: SecondaryGradientExist(),
          }}
          className="rounded-2xl p-[1px] "
        >
          <div
            className=" rounded-2xl 
          "
          >
            <div
              style={{ background: BgDarker() }}
              className=" p-2 grid grid-cols-4 gap-4 text-white rounded-2xl"
            >
              <div
                data-task="new"
                className="w-full  relative group flex flex-col gap-4"
              >
                <div className="bg-[#5A5A5A] w-fit px-4 rounded-lg">
                  {lifetimeState.whitoutStarting}
                </div>
                <Plus
                  onClick={(e) => addTask(e, lifetimeState.whitoutStarting)}
                  size={20}
                  className="absolute top-[2px] right-1 cursor-pointer hover:scale-125 duration-150 group-hover:block
                  hidden text-[#5A5A5A] "
                />
                <ul
                  onDragEnter={dragenterUL}
                  onDragOver={dragoverUL}
                  data-ul={lifetimeState.whitoutStarting}
                  className="flex flex-col gap-2 h-full "
                >
                  {tasks.filter(
                    (e) => e.lifetime === lifetimeState.whitoutStarting
                  ).length !== 0 &&
                    tasks
                      .filter(
                        (e) => e.lifetime === lifetimeState.whitoutStarting
                      )
                      .map((e) => <Task key={`task-${e.id}`} task={e} />)}
                </ul>
              </div>
              <div
                data-task={lifetimeState.inProgress}
                className="w-full  relative group flex flex-col gap-4"
              >
                <div className="bg-blue-700 w-fit px-4 rounded-lg">
                  {lifetimeState.inProgress}
                </div>
                <Plus
                  onClick={(e) => addTask(e, lifetimeState.inProgress)}
                  size={20}
                  className="absolute top-[2px] right-1 cursor-pointer hover:scale-125 duration-150 group-hover:block
                  hidden text-blue-400"
                />
                <ul
                  onDragEnter={dragenterUL}
                  onDragOver={dragoverUL}
                  data-ul={lifetimeState.inProgress}
                  className="flex flex-col gap-2 h-full"
                >
                  {tasks.filter((e) => e.lifetime === lifetimeState.inProgress)
                    .length !== 0 &&
                    tasks
                      .filter((e) => e.lifetime === lifetimeState.inProgress)
                      .map((e) => <Task key={`task-${e.id}`} task={e} />)}
                </ul>
              </div>
              <div
                data-task={lifetimeState.completed}
                className="w-full  relative group flex flex-col gap-4"
              >
                <div className="bg-green-700 w-fit px-4 rounded-lg">
                  {lifetimeState.completed}
                </div>
                <Plus
                  onClick={(e) => addTask(e, lifetimeState.completed)}
                  size={20}
                  className="absolute top-[2px] right-1 cursor-pointer hover:scale-125 duration-150 group-hover:block
                  hidden text-green-700"
                />
                <ul
                  onDragEnter={dragenterUL}
                  onDragOver={dragoverUL}
                  data-ul={lifetimeState.completed}
                  className="flex flex-col gap-2 h-full"
                >
                  {tasks.filter((e) => e.lifetime === lifetimeState.completed)
                    .length !== 0 &&
                    tasks
                      .filter((e) => e.lifetime === lifetimeState.completed)
                      .map((e) => <Task key={`task-${e.id}`} task={e} />)}
                </ul>
              </div>
              <div
                data-task={lifetimeState.filed}
                className="w-full  relative group flex flex-col gap-4"
              >
                <div className="bg-red-700 w-fit px-4 rounded-lg">
                  {lifetimeState.filed}
                </div>
                <Plus
                  onClick={(e) => addTask(e, lifetimeState.filed)}
                  size={20}
                  className="absolute top-[2px] right-1 cursor-pointer hover:scale-125 duration-150 group-hover:block
                  hidden text-red-700"
                />
                <ul
                  onDragEnter={dragenterUL}
                  onDragOver={dragoverUL}
                  data-ul={lifetimeState.filed}
                  className="flex flex-col gap-2 h-full"
                >
                  {tasks.filter((e) => e.lifetime === lifetimeState.filed)
                    .length !== 0 &&
                    tasks
                      .filter((e) => e.lifetime === lifetimeState.filed)
                      .map((e) => <Task task={e} key={`task-${e.id}`} />)}
                </ul>
              </div>
              <ModalResponsible />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tasks;
