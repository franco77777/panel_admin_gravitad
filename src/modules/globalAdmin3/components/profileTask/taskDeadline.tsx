import { CalendarX } from "lucide-react";

import DatePicker from "react-datepicker";
import type { taskProfile } from "../../types";

const TaskDeadline = ({ taskSelected, tasks, setTasks }: taskProfile) => {
  const setStartDate = (date: Date) => {
    if (taskSelected) {
      const copyTasks = [...tasks];
      const currentTask = copyTasks.find((e) => e.id === taskSelected.id);
      if (currentTask) {
        currentTask.date = date;
        setTasks(copyTasks);
      }
    }
  };
  return (
    <li className=" w-fit  flex relative z-40 items-center">
      <div className="flex gap-2 items-center w-40">
        <CalendarX size={16} />
        <div>Deadline</div>
      </div>

      <DatePicker
        selected={taskSelected?.date}
        onChange={(date) => setStartDate(date as Date)}
        dateFormat="MMMM d, yyyy"
        className=" text-left z-[100] outline-none shadow-none hover:scale-105 duration-150 cursor-pointer"
      />
    </li>
  );
};

export default TaskDeadline;
