import { Bg, BgDarker, Primary } from "@/theme/theming";

import { useEffect, useState } from "react";

import { pageStore } from "@/store/administration/pageStore";
import type { PageElement } from "@/store/administration/pageStore";
import { codeListState } from "../utils/GAStates";
import type { codePage } from "@/types/globalAdmin";
import { globalAdminStore } from "@/store/administration/globalAdminStore";
import { storeTask } from "@/store/globalAdmin3/taskStore";
export interface prop {
  element: PageElement;
  //searcher: string;
  //setSearcher: React.Dispatch<React.SetStateAction<string>>;
}
const ModalCode = () => {
  const [searcher, setSearcher] = useState("");
  const [element, setElement] = useState<PageElement>();
  const getIdCode = globalAdminStore((state) => state.idCode);
  const tasks = storeTask((state) => state.tasks);

  const taskSelected = storeTask((state) => state.taskSelected);
  const setTasks = storeTask((state) => state.setTasks);

  useEffect(() => {
    if (taskSelected) {
      const copyTasks = [...tasks];
      const current = copyTasks.find((e) => e.id === taskSelected.id);
      if (current) {
        const code = current.page.find((e) => e.id === getIdCode);
        if (code) {
          setElement(code);
        }
      }
    }
    // const copyPage = [...getPageStore];
    // const currentElement = copyPage.find((e) => e.id === getIdCode);
    // if (currentElement) setElement(currentElement);
  }, [getIdCode, taskSelected, tasks]);

  const mouseOver = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const Target = e.target as HTMLElement;
    Target.style.backgroundColor = Bg();
  };
  const mouseLeave = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const Target = e.target as HTMLElement;
    Target.style.backgroundColor = "transparent";
  };
  const clickHandleInput = (
    //e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    codeType: string
  ) => {
    //const Target = e.target as HTMLElement;
    const modalContainer = document.getElementById("modalCode") as HTMLElement;
    const divFixed = document.getElementById("divCodeFixed") as HTMLElement;
    divFixed.classList.add("hidden");
    modalContainer.classList.add("opacity-0");
    modalContainer.classList.add("-translate-y-full");
    modalContainer.classList.add("pointer-events-none");
    setTimeout(() => {
      modalContainer.classList.remove("duration-150");
    }, 60);
    if (taskSelected) {
      const copyTasks = [...tasks];
      const current = copyTasks.find((e) => e.id === taskSelected.id);
      if (current) {
        const code = current.page.find((e) => e.id === getIdCode);
        if (code) {
          code.language = codeType;
          setTasks(copyTasks);
          setSearcher("");
        }
      }
    }
    // const copyPage = [...getPageStore]
    // //const current = copyPage.find((e) => e.id === getIdCode)
    // if (current) {
    //   current.language = codeType
    //   setPageStore(copyPage)
    //   console.log('codeType', codeType)
  };
  const disableEslint = () => {};
  return (
    <ul
      id="modalCode"
      style={{ background: BgDarker(), borderColor: Primary() }}
      //data-modalCode={`modal-${element.id}`}
      className={`absolute right-[11%] flex-col gap-2  
        border-[1px]  rounded px-2 py-1 flex items-center 
        text-base font-base w-52 z-50 scrollbar2 test
        -translate-y-full opacity-0 h-80 overflow-y-auto  pointer-events-none
        `}
    >
      <li className="w-full rounded ">
        <input
          data-input="searcher-code"
          value={searcher}
          onChange={(e) => setSearcher(e.target.value)}
          style={{ background: Bg() }}
          type="text"
          className="w-full h-7 rounded inputFocus text-center"
          spellCheck="false"
        />
      </li>
      {codeListState
        ? codeListState
            .sort((a, b) => {
              return a.name.localeCompare(b.name);
            })
            .filter((item) => {
              return searcher.toLowerCase() === ""
                ? item
                : item.name.trim().toLowerCase().includes(searcher.trim());
            })
            .map((e, i) => (
              <li
                onFocus={disableEslint}
                onKeyDown={disableEslint}
                key={i as number}
                onMouseOver={(event) => mouseOver(event)}
                onMouseLeave={(event) => mouseLeave(event)}
                onClick={() => clickHandleInput(e.code)}
                className="hover:scale-105 bg-transparent justify-between flex gap-2 items-center w-full rounded duration-150 cursor-pointer"
              >
                <div className=" bg-transparent pointer-events-none overflowCode w-full ">
                  {e.name}
                </div>
                <input
                  onChange={disableEslint}
                  style={{
                    borderColor: Primary(),
                    backgroundColor:
                      element?.language === e.code ? Primary() : "transparent",
                  }}
                  type="checkbox"
                  checked={element?.language === e.code}
                  className="w-5 h-5 rounded-sm border-[1px] pointer-events-none bg-transparent"
                />
              </li>
            ))
        : ""}
    </ul>
  );
};
export default ModalCode;
