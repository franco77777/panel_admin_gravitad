import {
  oninputTask,
  clickImgCfg,
  clickImgPencil,
  dragendTask,
  dragstartTask,
  blurTask,
} from "../utils/services";
import pencil from "../icons/pencil.svg";
import deleteImg from "../icons/delete.svg";
import user from "../icons/users.svg";
import DatePicker from "react-datepicker";

import type { task } from "../types";
import { storeTask } from "@/store/globalAdmin3/taskStore";
import { lifetimeState } from "../utils/ga3states";
import { CalendarX } from "lucide-react";
export interface tasktype {
  task: task;
}
const Task = ({ task }: tasktype) => {
  const tasks = storeTask((state) => state.tasks);
  const setTasks = storeTask((state) => state.setTasks);
  const SetTaskSelected = storeTask((state) => state.setTaskSelected);

  //const [startDate, setStartDate] = useState(new Date());
  //console.log("date", startDate);
  const setStartDate = (date: Date) => {
    const copyTasks = [...tasks];
    const currentTask = copyTasks.find((e) => e.id === task.id) as task;
    currentTask.date = date;
    setTasks(copyTasks);
  };
  let bg = "red";
  switch (task.lifetime) {
    case lifetimeState.whitoutStarting:
      bg = "rgb(47, 47, 47)";
      break;
    case lifetimeState.inProgress:
      bg = "rgb(27, 45, 56)";
      break;

    case lifetimeState.completed:
      bg = "rgb(35, 49, 42)";
      break;

    case lifetimeState.filed:
      bg = "rgb(69, 10, 10)";
      break;

    default:
      break;
  }
  const setTaskSelected = () => {
    const ga3page = document.getElementById("ga3page") as HTMLElement;
    if (ga3page.classList.contains("translate-x-full")) {
      ga3page.classList.remove("translate-x-full");
      ga3page.classList.add("translate-x-0");
    }
    const taskSelected = [...tasks].find((e) => e.id === task.id);
    console.log("setting taskselceted,", task);

    if (taskSelected) SetTaskSelected(taskSelected);
  };
  const openModalResponsible = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const modal = document.getElementById("modalResponsible") as HTMLElement;
    const containerLi = target.closest("[data-li=parent]") as HTMLElement;
    const containerResponsible = target.closest(
      "[data-task=responsible]"
    ) as HTMLElement;
    console.log("im constiner", containerLi);

    modal.classList.toggle("pointer-events-none");
    modal.classList.toggle("hidden");
    containerLi.insertBefore(modal, containerResponsible.nextSibling);

    //if (taskSelected) setTaskSelected(taskSelected);
  };

  const disableEslint = () => {};
  return (
    <li
      onKeyDown={disableEslint}
      onClick={() => setTaskSelected()}
      style={{ backgroundColor: bg }}
      data-lifetime={task.lifetime}
      data-li="parent"
      draggable="true"
      onDragStart={(e) => dragstartTask(e)}
      onDragEnd={() => dragendTask()}
      className="p-2 rounded cursor-grab flex flex-col gap-2 relative group/li"
      data-task-id={task.id}
      data-firing="true"
    >
      <img
        onKeyDown={disableEslint}
        onClick={(e) => clickImgPencil(e)}
        src={pencil}
        alt="pencil"
        className="w-4 h-4 absolute top-1 right-8 hover:scale-125 duration-150 hidden group-hover/li:block z-50 cursor-pointer"
      />
      <img
        onKeyDown={disableEslint}
        onClick={(e) => clickImgCfg(e, task.id)}
        src={deleteImg}
        alt="delete"
        className="w-4 h-4 absolute top-1 right-2 hover:scale-125 duration-150 hidden group-hover/li:block z-50 cursor-pointer"
      />
      <div onKeyDown={disableEslint} data-firing="true" className="flex gap-2">
        <img
          src="https://www.notion.so/icons/clipping_lightgray.svg?mode=dark"
          alt="imagedf"
          className="w-5 h-5 mt-[2px] pointer-events-none"
        />
        <div
          id={`task-${task.id}`}
          onBlur={(e) => blurTask(e)}
          data-li="task"
          onInput={(e) => oninputTask(e)}
          className="w-full shadow-none outline-none flex flex-col gap-2 break-all pointer-events-none"
        >
          {task.task}
        </div>
      </div>
      <div
        data-task="responsible"
        onKeyDown={disableEslint}
        onClick={(e) => openModalResponsible(e)}
        className="flex gap-2 w-fit hover:scale-105 duration-150 relative items-center"
      >
        <img src={user} alt="user" />
        <div>{task.responsible ? task.responsible : "Add responsible"}</div>
      </div>
      <div className="data w-fit relative flex gap-[3px] items-center">
        <CalendarX size={16} />
        <DatePicker
          selected={task.date}
          onChange={(date) => setStartDate(date as Date)}
          dateFormat="MMMM d, yyyy"
        />
      </div>
    </li>
  );
};

export default Task;
