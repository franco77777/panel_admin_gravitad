import { Bg, BgDarker, Primary } from "@/theme/theming";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalDrawningOption from "./modalOptions/drawningOption";
import ModalParagraphOption from "./modalOptions/paragraphOption";
import ModalHeadingOption from "./modalOptions/headingOption";
import ModalHeading2Option from "./modalOptions/heading2Option";
import ModalHeading3Option from "./modalOptions/heading3Option";
import ModalUnorderedList from "./modalOptions/unorderedListOption";
import ModalOrderedList from "./modalOptions/orderedListOption";
import ModalTaskList from "./modalOptions/taskListOption";
import ModalDivider from "./modalOptions/dividerOption";
import ModalHint from "./modalOptions/hintOption";
import CodeOption from "./modalOptions/codeOption";
import { pageStore } from "@/store/administration/pageStore";
import ImageOption from "./modalOptions/imageOption";
import FileOption from "./modalOptions/fileOption";
import LinkOption from "./modalOptions/linkOption";
import { storeTask } from "@/store/globalAdmin3/taskStore";

const ModalBlackboard = () => {
  const setInsertStore = pageStore((state) => state.setInsert);
  const setIdStore = pageStore((state) => state.setId);
  const setFocus = pageStore((state) => state.setFocus);
  const getIdPage = pageStore((state) => state.idPage);
  const taskSelected = storeTask((state) => state.taskSelected);
  const tasks = storeTask((state) => state.tasks);
  const setTasks = storeTask((state) => state.setTasks);
  const navigate = useNavigate();
  const setTaskCount = storeTask((state) => state.setTaskCount);
  const taskCount = storeTask((state) => state.taskCount);
  console.log("taskkkkkkkk", tasks);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setBg(Bg());
  //   }, 0);

  // }, []);
  const mouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const Target = e.target as HTMLElement;
    Target.style.backgroundColor = Bg();
  };
  const mouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const Target = e.target as HTMLElement;
    Target.style.backgroundColor = "transparent";
  };
  console.log("task");

  const modalPageOptions = (e: string) => {
    const modalBlackboard = document.getElementById(
      "modalBlackboard"
    ) as HTMLElement;
    const bgModalHidden = document.getElementById(
      "bgModalHidden"
    ) as HTMLElement;
    bgModalHidden.classList.add("hidden");
    modalBlackboard.classList.add("-translate-x-[125%]");
    modalBlackboard.classList.add("opacity-0");
    modalBlackboard.classList.add("pointer-events-none");
    setTimeout(() => {
      modalBlackboard.classList.remove("duration-150");
      //modalBlackboard.classList.add("hidden");
    }, 100);

    const tasksCopy = [...tasks];
    console.log("getIDPage", getIdPage);
    if (taskSelected) {
      const current = tasksCopy.find((e) => e.id === taskSelected.id);
      if (current) {
        const index = current.page.findIndex((e) => e.id === getIdPage);
        console.log("index", index);
        switch (e) {
          case "drawning":
            if (getIdPage !== null) {
              setIdStore(getIdPage);
              setInsertStore(true);
            }
            navigate("/canvas");
            break;
          case "paragraph":
          case "heading":
          case "heading2":
          case "heading3":
          case "unorderedList":
          case "orderedList":
          case "taskList":
          case "divider":
          case "hint": {
            const newElement = {
              id: taskCount,
              type: e,
            };
            console.log("idapgeeeeeeeee", getIdPage);
            console.log("taskkkkkkid pageeee", taskSelected);

            if (getIdPage === null) {
              current.page.push(newElement);
            } else {
              current.page.splice(index + 1, 0, newElement);
            }

            if (e !== "divider") setFocus(taskCount);
            setTasks(tasksCopy);

            break;
          }
          case "code": {
            const newElement = {
              id: taskCount,
              type: e,
              language: "tsx",
            };
            if (getIdPage === null) {
              current.page.push(newElement);
            } else {
              current.page.splice(index + 1, 0, newElement);
            }

            setFocus(taskCount);
            setTasks(tasksCopy);
            break;
          }
          case "image": {
            const input = document.getElementById("input-image") as HTMLElement;
            input.click();
            break;
          }
          case "file": {
            const input = document.getElementById("input-file") as HTMLElement;
            input.click();
            break;
          }
          case "link": {
            const modalLink = document.getElementById(
              "modalLink"
            ) as HTMLElement;
            modalLink.classList.remove("hidden");
            modalLink.classList.add("flex");
            break;
          }
          default:
            console.log("no option");

            break;
        }
        setTaskCount();
      }
    }
  };

  return (
    <div
      style={{ background: BgDarker(), borderColor: Primary() }}
      id="modalBlackboard"
      data-modal="modalBlackboard"
      className="left-[11%] scrollbar2 h-80 overflow-y-auto flex-col gap-2 opacity-0 
                        -translate-x-[125%] border-[1px] pointer-events-none rounded px-2 py-1 flex 
                        items-center text-base font-base w-52 z-50 absolute"
    >
      <ModalDrawningOption
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalParagraphOption
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalHeadingOption
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalHeading2Option
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalHeading3Option
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalUnorderedList
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalOrderedList
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalTaskList
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalDivider
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalHint
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <CodeOption
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ImageOption
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <FileOption
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <LinkOption
        modalPageOptions={modalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
    </div>
  );
};
export default ModalBlackboard;
