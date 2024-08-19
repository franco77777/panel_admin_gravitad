import type { task, taskProfile } from "../../types";
import { useEffect, useState } from "react";
import { FileLock, Minus, Plus } from "lucide-react";
import { Bg, BgDarker, Primary } from "@/theme/theming";
import { storeTask } from "@/store/globalAdmin3/taskStore";

const TaskBlocked = ({ taskSelected, tasks, setTasks }: taskProfile) => {
  const [searcher, setSearcher] = useState("");
  const [taskBlocking, setTaskBlocking] = useState<task[]>([]);
  const [taskNotBlocking, setTaskNotBlocking] = useState<task[]>([]);
  const [idBlockClicked, setIdBlockClicked] = useState<number>(0);
  const setTaskSelected = storeTask((state) => state.setTaskSelected);
  useEffect(() => {
    const copytasks = [...tasks];
    const taskBlockingList: task[] = [];
    const taskNotBlockingList: task[] = [];
    for (const element of taskSelected.blocked) {
      const block = copytasks.find((e) => e.id === element);
      if (block) taskBlockingList.push(block);
    }
    for (const element of copytasks) {
      if (element.id === taskSelected.id) continue;
      if (!taskSelected.blocked.includes(element.id)) {
        taskNotBlockingList.push(element);
      }
    }

    console.log("taskBLock22", taskBlockingList);

    setTaskBlocking(taskBlockingList);
    setTaskNotBlocking(taskNotBlockingList);
  }, [tasks, taskSelected]);

  const clickBlock = () => {
    const id = document.getElementById("blockModal") as HTMLElement;
    const searcher = document.getElementById("searcherBlock") as HTMLElement;

    if (id.classList.contains("flex")) {
      id.classList.remove("flex");
      id.classList.add("hidden");
    } else {
      id.classList.remove("hidden");
      id.classList.add("flex");
    }
    searcher.focus();
  };
  const clickOption = (taskId: number) => {
    const taskCopy = [...tasks];
    const current = taskCopy.find((e) => e.id === taskSelected.id);

    if (current && !idBlockClicked) {
      current.blocked?.push(taskId);
      setTasks(taskCopy);
      clickBlock();
      return;
    }
    if (current && idBlockClicked) {
      //const newBlock = [...current.blocked];
      //console.log("newblockfalling", newBlock);

      const index = current.blocked.findIndex((e) => e === idBlockClicked);
      console.log("index", index);
      console.log("idBlockCLiked", idBlockClicked);

      current.blocked.splice(index + 1, 0, taskId);
      //current.blocked.push(taskId);
      //current.blocked = newBlock;
      //console.log("new block", newBlock);
      setTasks(taskCopy);
      setIdBlockClicked(0);
      clickBlock();
    }
  };
  console.log("tasknotbvlock", taskNotBlocking);
  console.log("taskbvlockkkk", taskBlocking);
  const clickBlockDeleteTask = (id: number) => {
    const copytasks = [...tasks];
    const current = copytasks.find((e) => e.id === taskSelected.id);
    if (current) {
      const newBlock = current.blocked.filter((e) => e !== id);
      current.blocked = newBlock;

      setTasks(copytasks);
    }
  };
  const clickBlockAddTask = (id: number) => {
    setIdBlockClicked(id);
    clickBlock();
  };
  const keydownModalBlock = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "Escape") {
      const id = document.getElementById("blockModal") as HTMLElement;

      id.classList.remove("flex");
      id.classList.add("hidden");
    }
  };
  const clicTaskBlocking = (id: number) => {
    const copytasks = [...tasks];
    const current = copytasks.find((e) => e.id === id);
    if (current) {
      setTaskSelected(current);
    }
  };
  const disableEslint = () => {};
  return (
    <div className="flex items-start relative">
      <div className="flex gap-2 w-40 items-center">
        <FileLock size={16} />
        <div>Blocked by</div>
      </div>

      <ul className="flex flex-col gap-2 min-w-40 w-fit">
        {taskBlocking.length !== 0 ? (
          taskBlocking.map((e) => (
            <li key={e.id} className="flex gap-2 items-center relative">
              <div
                onKeyDown={disableEslint}
                onClick={() => clicTaskBlocking(e.id)}
                className="hover:scale-105 duration-150 cursor-pointer "
              >
                {e.task}
              </div>
              <Minus
                onClick={() => clickBlockDeleteTask(e.id)}
                className="hover:scale-125 duration-150 cursor-pointer absolute top-1/2 -translate-y-1/2 right-0"
                size={16}
              />
              <Plus
                onClick={() => clickBlockAddTask(e.id)}
                className="hover:scale-125 duration-150 cursor-pointer absolute top-1/2 -translate-y-1/2 right-5"
                size={16}
              />
            </li>
          ))
        ) : (
          <div onKeyDown={disableEslint} onClick={() => clickBlock()}>
            Void
          </div>
        )}
      </ul>
      <ul
        onKeyDown={(e) => keydownModalBlock(e)}
        style={{ backgroundColor: BgDarker(), borderColor: Primary() }}
        id="blockModal"
        className="hidden flex-col gap-2 absolute left-40 top-0 z-50 border-[1px] rounded p-2"
      >
        <li>
          <input
            id="searcherBlock"
            value={searcher}
            onChange={(e) => setSearcher(e.target.value)}
            style={{ background: Bg() }}
            type="text"
            className="w-full h-5 rounded  text-center shadow-none outline-none"
            spellCheck="false"
          />
        </li>
        {taskNotBlocking
          .sort((a, b) => {
            return a.task.localeCompare(b.task);
          })
          .filter((item) => {
            return searcher.toLowerCase() === ""
              ? item
              : item.task.trim().toLowerCase().includes(searcher.trim());
          })
          .map((a) => (
            <li
              key={`block-${a.id}`}
              onKeyDown={disableEslint}
              onClick={() => clickOption(a.id)}
              className="hover:scale-105 duration-150 cursor-pointer"
            >
              {a.task}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TaskBlocked;
