import { Bg, BgDarker, Primary, SecondaryGradientExist } from "@/theme/theming";

import { MouseEventHandler, useEffect, useRef, useState } from "react";
import ModalBlackboard from "../../globalAdmin3/components/modalBlackboard";

import { useNavigate } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-synthwave84.css";
import "prismjs-components-importer/esm";
//import "prismjs/components/prism-jsx";
//import "prismjs/components/**";
import { pageStore } from "@/store/administration/pageStore";
import type { PageElement } from "@/store/administration/pageStore";
import {
  createInputElement,
  GenerateElements,
} from "../../globalAdmin/utils/GA3Services";
import ModalCode from "../../globalAdmin/components/modalCode";
import {
  ChevronLeft,
  ChevronRight,
  CircleX,
  FileType,
  RedoDot,
  Trash2,
} from "lucide-react";
import readXlsxFile from "read-excel-file";
import type { Row } from "read-excel-file";
import { codeListState } from "../../globalAdmin/utils/GAStates";
import TaskProfile from "./taskProfile";
import { storeTask } from "@/store/globalAdmin3/taskStore";

const PageSection = () => {
  const page = pageStore((state) => state.page);
  const setPageId = pageStore((state) => state.setIdPage);

  const navigate = useNavigate();
  const getIdPage = pageStore((state) => state.idPage);
  const focusStore = pageStore((state) => state.focus);
  const [handleModal, setHandleModal] = useState(false);
  const [linkValue, setLinkValue] = useState("");
  const taskSelected = storeTask((state) => state.taskSelected);
  const tasks = storeTask((state) => state.tasks);
  const setTasks = storeTask((state) => state.setTasks);
  const taskCount = storeTask((state) => state.taskCount);
  const setTaskCount = storeTask((state) => state.setTaskCount);

  // biome-ignore lint/correctness/useExhaustiveDependencies(page): <explanation>
  useEffect(() => {
    Prism.highlightAll();
  }, [tasks, taskSelected]);
  const handleModalOptions2 = () => {
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

    setHandleModal(false);
  };

  const handleModalOptions = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number | null
  ) => {
    const Target = e.target as HTMLElement;
    const divPage = document.getElementById("page") as HTMLElement;
    const modalBlackboard = document.getElementById(
      "modalBlackboard"
    ) as HTMLElement;
    const bgModalHidden = document.getElementById(
      "bgModalHidden"
    ) as HTMLElement;
    const pageHeight = divPage.getBoundingClientRect().height;
    //const clientY = Target.parentElement?.offsetTop as number;
    const clientY = Target.getBoundingClientRect().top;
    const divClientY = divPage.getBoundingClientRect().top;
    bgModalHidden.classList.toggle("hidden");
    //console.log("pageHeight", pageHeight);

    const top = clientY - divClientY;

    if (top < 320) {
      modalBlackboard.style.top = `${top}px`;
      modalBlackboard.style.height = `${
        pageHeight - top < 320 ? pageHeight - top - 5 : 320
      }px`;
    } else {
      modalBlackboard.style.top = `${top - 315}px`;
      modalBlackboard.style.height = "320px";
    }
    setTimeout(() => {
      modalBlackboard.classList.add("duration-150");
      modalBlackboard.classList.toggle("opacity-0");
      modalBlackboard.classList.toggle("-translate-x-[125%]");
      modalBlackboard.classList.toggle("pointer-events-none");
    }, 0);

    setPageId(id);
    setHandleModal(!handleModal);

    // const modalBlackboard = Target.parentElement?.querySelector(
    //   "[data-modal=modalBlackboard]"
    // ) as HTMLElement;

    // modalBlackboard.classList.toggle("-translate-x-[125%]");
    // modalBlackboard.classList.toggle("opacity-0");
    // modalBlackboard.classList.toggle("pointer-events-none");
    // if (first) setHandleModal(!handleModal);
    // else setHandleModal2(!handleModal2);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     const page = document.getElementById("page") as HTMLElement;
  //     page.style.scrollbarColor = "red";
  //   }, 100);
  // }, []);

  useEffect(() => {
    if (taskSelected) {
      for (const i of taskSelected.page) {
        const divText = document.querySelector(
          `[data-id=page-${i.id}]`
        ) as HTMLElement;

        if (i.text && i.type !== "code") {
          divText.innerHTML = i.text;
        }
        if (i.text && i.type === "code") {
          if (!divText.innerText) {
            divText.innerText = i.text;
          }
        }
        if (i.type === "code") {
          const codeContainer = divText.parentElement
            ?.parentElement as HTMLElement;
          const brother = codeContainer.children[2] as HTMLElement;
          const scrollEditableText = (e: Event) => {
            const event = e as WheelEvent;
            const Target = event.target as HTMLElement;
            brother.scrollLeft = Target.scrollLeft;
          };

          divText.addEventListener("scroll", scrollEditableText);
        }
      }
      if (focusStore !== null) {
        const divText = document.querySelector(
          `[data-id=page-${focusStore}]`
        ) as HTMLElement;

        divText.focus();
      }
      setHandleModal(false);
    }
  }, [focusStore, taskSelected]);
  // biome-ignore lint/correctness/useExhaustiveDependencies(page): <explanation>
  useEffect(() => {
    if (taskSelected) {
      for (const i of taskSelected.page) {
        if (i.type === "unorderedList") {
          const divEditable = document.querySelector(
            `[data-id=page-${i.id}]`
          ) as HTMLElement;
          const divUL = divEditable.parentElement?.children[0] as HTMLElement;

          const childrens = divEditable.children.length;
          divUL.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16" preserveAspectRatio="xMidYMid meet" class="text-base" width="12" height="12" style="vertical-align: middle;"><path fill="currentColor" fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path></svg>`;
          for (let i = 0; i < childrens; i++) {
            divUL.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16" preserveAspectRatio="xMidYMid meet" class="text-base" width="12" height="12" style="vertical-align: middle;"><path fill="currentColor" fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path></svg>`;
          }
        }
        if (i.type === "orderedList") {
          const divEditable = document.querySelector(
            `[data-id=page-${i.id}]`
          ) as HTMLElement;
          const divOL = divEditable.parentElement?.children[0] as HTMLElement;
          const childrens = divEditable.children.length;
          divOL.innerHTML = "<div>0</div>";
          for (let i = 0; i < childrens; i++) {
            divOL.innerHTML += `<div>${i + 1}</div>`;
          }
        }
        if (i.type === "taskList") {
          const divEditable = document.querySelector(
            `[data-id=page-${i.id}]`
          ) as HTMLElement;
          const divContainerInputs = divEditable.parentElement
            ?.children[0] as HTMLElement;
          const childrens = divEditable.children.length;

          divContainerInputs.innerHTML = "";
          for (let b = 0; b < childrens + 1; b++) {
            const input = createInputElement();
            if (i.checks?.includes(b)) {
              input.checked = true;
              input.style.backgroundColor = Primary();
            }
            divContainerInputs.appendChild(input);
          }
        }
      }
    }
  }, [taskSelected]);
  const clickEditElement = (id: number) => {
    //e.preventDefault();
    if (taskSelected) {
      const copyPage = [...tasks];
      const current = copyPage.find((e) => e.id === taskSelected.id);
      if (current) {
        const deleted = current.page.filter((e) => e.id !== id);
        current.page = deleted;
        setTasks(copyPage);
      }
    }
  };
  const removeModalCode = () => {
    const modalCode = document.getElementById("modalCode") as HTMLElement;
    const divFixed = document.getElementById("divCodeFixed") as HTMLElement;
    modalCode.classList.add("pointer-events-none");
    modalCode.classList.add("opacity-0");
    modalCode.classList.add("-translate-y-full");
    divFixed.classList.add("hidden");
    setTimeout(() => {
      modalCode.classList.remove("duration-150");
    }, 100);
  };

  const setImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      if (files.length === 0) return;
      if (files[0].type.split("/")[0] !== "image") return;
      const newElement: PageElement = {
        id: taskCount,
        type: "image",
        url: URL.createObjectURL(files[0]),
      };
      if (taskSelected) {
        const copyTasks = [...tasks];
        const current = copyTasks.find((e) => e.id === taskSelected.id);
        if (current) {
          if (getIdPage === null) {
            current.page.push(newElement);
          } else {
            const index = current.page.findIndex((e) => e.id === getIdPage);
            current.page.splice(index + 1, 0, newElement);
          }
          e.target.value = "";
          setTasks(copyTasks);
          setTaskCount();
          // const page = current?.page
          // const index = pageCopy.findIndex((e) => e.id === getIdPage);
          // if(getIdPage === null && ){
          //   current.page.push(newElement)
          // }
          // if (current) {
          //   const deleted = current.page.filter((e) => e.id !== getIdPage);
          //   current.page = deleted;
          //   setTasks(copyTasks);
          // }
        }
      }

      // const pageCopy = [...page];
      // const index = pageCopy.findIndex((e) => e.id === getIdPage);

      // if (getIdPage === null) {
      //   pageCopy.push(newElement);
      // } else {
      //   pageCopy.splice(index + 1, 0, newElement);
      // }
      // setPageStore(pageCopy);
    }
  };
  const createTableHead = (data: Row) => {
    const tr = document.createElement("tr");
    tr.style.borderBottomWidth = "1px";
    tr.style.borderColor = Primary();

    let count = 0;
    for (const i of data) {
      const th = document.createElement("th");
      th.style.width = "125px";
      th.classList.add("font-normal");
      th.classList.add("text-base");
      th.style.overflow = "hidden";
      th.style.textOverflow = "ellipsis";
      th.classList.add("max-w-[125px]");
      th.classList.add("hover:max-w-max");
      if (count) {
        th.style.borderLeftWidth = "1px";
        th.style.borderColor = Primary();
      }
      //const text = document.createTextNode(i as string)
      if (i !== null) {
        th.append(i as string);
      }
      tr.appendChild(th);
      count++;
    }
    return tr;
  };
  const createTableData = (data: Row, last: boolean) => {
    const tr = document.createElement("tr");
    let count = 0;
    if (!last) {
      tr.style.borderBottomWidth = "1px";
      tr.style.borderColor = Primary();
    }
    for (const i of data) {
      const td = document.createElement("td");
      td.style.width = "125px";
      td.classList.add("font-normal");
      td.classList.add("text-base");
      td.style.overflow = "hidden";
      td.style.textOverflow = "ellipsis";
      td.classList.add("max-w-[125px]");
      td.classList.add("hover:max-w-max");
      td.classList.add("transition-all");
      td.classList.add("duration-300");
      if (count) {
        td.style.borderLeftWidth = "1px";
        td.style.borderColor = Primary();
      }
      //const text = document.createTextNode(i as string)
      if (i !== null) {
        td.append(i as string);
      }
      tr.appendChild(td);
      count++;
    }
    return tr;
  };
  const setFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;

    if (taskSelected) {
      //const pageCopy = [...page];
      const taskCopy = [...tasks];
      const current = taskCopy.find((e) => e.id === taskSelected.id);
      if (current) {
        const fileType = files[0].type;
        const fileName = files[0].name;
        const typeSplit = fileName.split(".");
        const index = current.page.findIndex((e) => e.id === getIdPage);

        //const index = pageCopy.findIndex((e) => e.id === getIdPage);
        // const fileType = files[0].type;
        // const fileName = files[0].name;
        if (typeSplit?.length) {
          const type = typeSplit[typeSplit.length - 1];
          const isFile = codeListState.find((e) => e.code === type);
          if (isFile && type !== "xlsx") {
            const fileReader = new FileReader();
            fileReader.readAsText(files[0]);
            fileReader.onload = () => {
              const newElement = {
                id: taskCount,
                type: "file",
                fileName: files[0].name,
                fileType: files[0].type,
                fileText: fileReader.result as string,
              };
              console.log("filereaderresult", fileReader.result);

              if (getIdPage === null) {
                current.page.push(newElement);
              } else {
                current.page.splice(index + 1, 0, newElement);
              }
              setTasks(taskCopy);
              setTaskCount();
            };
            return;
          }
        }

        const excel =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

        //application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
        if (fileType === excel) {
          let count = 0;
          const table = document.createElement("table");

          table.style.color = Primary();
          table.style.borderWidth = "1px";
          table.style.borderRadius = "5px";
          table.style.borderColor = Primary();
          table.style.backgroundColor = Bg();
          table.style.marginLeft = "5px";
          table.style.textAlign = "center";
          readXlsxFile(files[0])
            .then((rows) => {
              console.log("rows", rows);
              for (const i of rows) {
                if (count === 0) {
                  table.appendChild(createTableHead(i));
                } else {
                  table.appendChild(
                    createTableData(i, count + 1 === rows.length)
                  );
                }
                count++;
              }
              // `rows` is an array of rows
              // each row being an array of cells.
            })
            .then(() => {
              const newElement = {
                id: taskCount,
                type: "file",
                fileName: files[0].name,
                fileType: files[0].type,
                html: table,
              };
              if (getIdPage === null) {
                current.page.push(newElement);
              } else {
                current.page.splice(index + 1, 0, newElement);
              }
              setTasks(taskCopy);
            });
          setTaskCount();
          return;
        }
        const types = [
          "application/pdf",
          "text/csv",
          "application/vnd.oasis.opendocument.text",
          "text/plain",
        ];

        if (files) {
          if (files.length === 0) return;
          if (!types.includes(files[0].type)) {
            alert("file not supported");
            return;
          }

          const newElement = {
            id: page.length,
            type: "file",
            url: URL.createObjectURL(files[0]),
            fileName: files[0].name,
            FileType: files[0].type,
          };

          if (getIdPage === null) {
            current.page.push(newElement);
          } else {
            current.page.splice(index + 1, 0, newElement);
          }
          setTasks(taskCopy);
        }
      }
    }
  };

  const dragstartEditElement = (e: React.DragEvent<HTMLDivElement>) => {
    //e.preventDefault();

    const Target = e.target as HTMLElement;
    console.log("Target", Target);
    const pageElements = document.querySelector(
      "[data-page=elements]"
    ) as HTMLElement;

    //console.log("target", Target);
    const arrow = document.getElementById("arrow") as HTMLElement;
    arrow.classList.remove("hidden");
    arrow.classList.add("flex");

    //console.log("arrow", arrow);

    const parent = Target.parentElement as HTMLElement;
    console.log("parent", parent);

    //parent.classList.add("pointer-events-none");
    const lastChild = parent.lastChild as HTMLElement;
    console.log("lastChild", lastChild);

    lastChild.classList.add("opacity-50");
    lastChild.setAttribute("data-element", "hidden");
    parent.classList.add("dragging");

    pageElements.append(arrow);
    console.log("pageelementds", pageElements);

    //parent.replaceWith(createElement());
    //setHandleScroll(true);
    console.log("dragstartttttttttttttttt");
  };
  const dragendEditElement = () => {
    //e.preventDefault();
    const current = document.querySelector(
      "[data-element=hidden]"
    ) as HTMLElement;
    const parent = document.querySelector(".dragging") as HTMLElement;
    const Page = document.getElementById("page") as HTMLElement;
    const PageElements = document.querySelector(
      "[data-page=elements]"
    ) as HTMLElement;
    const pageChildrens = PageElements.children;
    const arrow = document.getElementById("arrow") as HTMLElement;
    arrow.replaceWith(parent);
    arrow.classList.remove("flex");
    arrow.classList.add("hidden");
    Page.append(arrow);
    //PageElements.style.cursor = "auto";
    current.classList.remove("opacity-50");
    parent.classList.remove("dragging");
    current.removeAttribute("data-element");
    const ids = [];

    for (const i of pageChildrens) {
      const pageId = Number.parseInt(
        i.getAttribute("data-page")?.split("page-")[1] as string
      );
      ids.push(pageId);
    }
    console.log("idddddddddddddd", ids);
    if (taskSelected) {
      const sortedElements: PageElement[] = [];
      const copyTasks = [...tasks];
      const current = copyTasks.find((e) => e.id === taskSelected.id);
      if (current) {
        for (const i of ids) {
          const element = current.page.find((e) => e.id === i);
          if (element) sortedElements.push(element);
        }
        current.page = sortedElements;
        setTasks(copyTasks);
        // const copyPage = [...page];
        // for (const i of ids) {
        //   const element = copyPage.find((e) => e.id === i);
        //   if (element) sortedElements.push(element);
        //setPageStore(sortedElements);
        // }
      }
    }

    //parent.classList.remove("hidden");
    //setHandleScroll(false);
  };
  const dragoverElements = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const PageElements = document.querySelector(
      "[data-page=elements]"
    ) as HTMLElement;

    const arrow = document.getElementById("arrow") as HTMLElement;
    const result: HTMLElement[] = [];

    const childs = [...PageElements.children] as HTMLElement[];
    for (const i of childs) {
      if (!i.classList.contains("dragging") && !i.classList.contains("arrow")) {
        result.push(i);
      }
    }

    const nextSibling = result.find((sibling) => {
      return (
        e.clientY <=
        sibling.getBoundingClientRect().top + sibling.offsetHeight / 2
      );
    }) as Node;
    PageElements.insertBefore(arrow, nextSibling);
  };

  //const internalRef = useRef<NodeJS.Timeout>();
  // const mouseleavePage = () => {
  //   console.log("leaving", internalRef.current);
  //   clearInterval(internalRef.current);
  //   setHandleInterval(false);
  // };
  // const mousemovePage = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //   const page = document.getElementById("page") as HTMLElement;
  //   //const target = e.target as HTMLElement;
  //   const clientY = e.clientY;
  //   const height = page.getBoundingClientRect().height;
  //   const pageTop = page.getBoundingClientRect().top;
  //   const porcent = (height / 100) * 15 + pageTop;
  //   const scrollTop = page.scrollTop;

  //   //console.log("clientY", clientY);
  //   //console.log("height", height);
  //   if (handleScroll) {
  //     if (clientY < porcent && !handleInterval) {
  //       //console.log("clientOffsetY", clientY);
  //       internalRef.current = setInterval(() => {
  //         page.scrollTop = scrollTop - 10;
  //         console.log("top");
  //       }, 100);
  //       //page.scrollTop = scrollTop - 10;
  //       setHandleInterval(true);
  //       console.log("idx", internalRef.current);
  //     }
  //     if (clientY > height - porcent && !handleInterval) {
  //       //console.log("client22", clientY);
  //       internalRef.current = setInterval(() => {
  //         page.scrollTop = scrollTop + 10;
  //         console.log("bottom");
  //       }, 100);
  //       //page.scrollTop = scrollTop + 10;
  //       setHandleInterval(true);
  //       console.log("idx", internalRef.current);
  //     }
  //     if (clientY > porcent && clientY < height - porcent && handleInterval) {
  //       console.log("clearingidx", internalRef.current);
  //       clearInterval(internalRef.current);
  //       setHandleInterval(false);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const elements = document.querySelectorAll(
  //     "[data-drag=element]"
  //   ) as NodeListOf<HTMLElement>;
  //   console.log("useefectingggggggggggggg");

  //   if (elements.length) {
  //     for (const i of elements) {
  //       i.addEventListener("dragstart", dragstartEditElement);
  //     }
  //   }
  // }, [page]);
  const clickLink = () => {
    if (!linkValue) return;
    const modalLink = document.getElementById("modalLink") as HTMLElement;
    console.log("modalLink", modalLink);
    console.log("linkValue", linkValue);

    const newElement = {
      id: taskCount,
      type: "link",
      url: linkValue,
    };
    const taskCopy = [...tasks];
    //const pageCopy = [...page];
    if (taskSelected) {
      const current = taskCopy.find((e) => e.id === taskSelected.id);
      if (current) {
        const index = current.page.findIndex((e) => e.id === getIdPage);

        if (getIdPage === null) {
          current.page.push(newElement);
        } else {
          current.page.splice(index + 1, 0, newElement);
        }
        modalLink.classList.remove("flex");
        modalLink.classList.add("hidden");
        setLinkValue("");
        setTaskCount();
        setTasks(taskCopy);
      }
    }
  };
  const clickCloseModalLink = () => {
    const modalLink = document.getElementById("modalLink") as HTMLElement;
    modalLink.classList.remove("flex");
    modalLink.classList.add("hidden");
    setLinkValue("");
  };
  const disableEslint = () => {};
  return (
    <div className="relative  w-full rounded-lg h-full grid place-items-center overflow-hidden">
      <div
        id="page"
        style={{
          backgroundColor: BgDarker(),
        }}
        className="flex flex-col gap-2  rounded-lg w-full h-full overflow-y-auto  scrollbar2"
      >
        <div
          style={{ backgroundColor: Bg(), borderColor: Primary() }}
          id="modalLink"
          className="border-[1px] rounded w-80 p-4 hidden flex-col gap-4 fixed top-1/2
           left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 modalAnimation"
        >
          <CircleX
            onClick={clickCloseModalLink}
            size={25}
            className="absolute top-2 right-2 cursor-pointer hover:scale-105 duration-150"
          />
          <div>Insert Url</div>
          <input
            value={linkValue}
            onChange={(e) => setLinkValue(e.target.value)}
            type="text"
            style={{ backgroundColor: BgDarker() }}
            className="w-full rounded outline-none shadow-none"
          />
          <div
            onKeyDown={disableEslint}
            onClick={() => clickLink()}
            style={{ background: SecondaryGradientExist() }}
            className="ml-auto rounded w-24 text-center cursor-pointer hover:scale-105 duration-150 text-black"
          >
            Add
          </div>
        </div>
        <div
          id="arrow"
          className="arrow hidden w-[80%] mx-auto justify-between items-center pointer-events-none"
        >
          <ChevronLeft size={24} strokeWidth={3} />
          <div
            style={{ background: SecondaryGradientExist() }}
            className="w-full h-[2px] rounded"
          />
          <ChevronRight size={24} strokeWidth={3} />
        </div>

        <ModalCode />
        <div
          onKeyDown={disableEslint}
          onClick={removeModalCode}
          id="divCodeFixed"
          className="top-0 left-0 fixed h-screen w-screen z-40 hidden "
        />
        <ModalBlackboard />

        <div
          id="bgModalHidden"
          onKeyDown={disableEslint}
          onClick={() => handleModalOptions2()}
          className="top-0 left-0 fixed hidden h-screen w-screen z-40"
        />

        <input
          onChange={(e) => setImage(e)}
          type="file"
          className="hidden"
          id="input-image"
        />
        <input
          onChange={(e) => setFile(e)}
          type="file"
          className="hidden"
          id="input-file"
        />
        <TaskProfile />
        <div className="py-2 z-20 h-full ">
          {!taskSelected?.page.length && (
            <div className=" flex gap-2 items-center relative w-[80%] mx-auto">
              <div
                onKeyDown={disableEslint}
                onClick={(event) => handleModalOptions(event, null)}
                className="cursor-pointer hover:scale-125 duration-150 absolute 
                top-1/2 -translate-y-1/2 -left-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="xMidYMid meet"
                  className="w-5 h-5  pointer-events-none"
                >
                  <title>image</title>
                  <path
                    className="pointer-events-none"
                    fill="currentColor"
                    d="M8.6 3a.6.6 0 0 0-1.2 0v4.4H3a.6.6 0 0 0 0 1.2h4.4V13a.6.6 0 1 0 1.2 0V8.6H13a.6.6 0 1 0 0-1.2H8.6V3Z"
                  />
                </svg>
              </div>
              Page
            </div>
          )}
          <section
            onDragOver={(e) => dragoverElements(e)}
            data-page="elements"
            className="flex flex-col gap-2 pb-2"
          >
            {taskSelected?.page.map((e) => (
              <div
                data-page={`page-${e.id}`}
                key={e.id}
                className="relative gap-4 rounded-xl w-full group"
              >
                <div
                  onKeyDown={disableEslint}
                  onClick={(event) => handleModalOptions(event, e.id)}
                  className={`${
                    e.type === "divider" ? "top-1/2 -translate-y-1/2" : "top-0"
                  } sm:hidden  sm:group-hover:block sm:cursor-pointer sm:hover:scale-125 
                  duration-150 absolute left-[5%]  sm:left-[2.8%] -translate-x-1/2`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    preserveAspectRatio="xMidYMid meet"
                    className="w-5 h-5 pointer-events-none"
                  >
                    <title className="pointer-events-none">image</title>
                    <path
                      className="pointer-events-none"
                      fill="currentColor"
                      d="M8.6 3a.6.6 0 0 0-1.2 0v4.4H3a.6.6 0 0 0 0 1.2h4.4V13a.6.6 0 1 0 1.2 0V8.6H13a.6.6 0 1 0 0-1.2H8.6V3Z"
                    />
                  </svg>
                </div>
                <div
                  data-drag="element"
                  onDragEnd={() => dragendEditElement()}
                  onDragStart={(e) => dragstartEditElement(e)}
                  onDragLeave={(e) => e.preventDefault()}
                  onDragExit={(e) => e.preventDefault()}
                  draggable="true"
                  onKeyDown={disableEslint}
                  onClick={() => clickEditElement(e.id)}
                  className={`${
                    e.type === "divider"
                      ? "top-1/2 -translate-y-1/2"
                      : "top-[2px]"
                  } sm:hidden sm:group-hover:block  sm:hover:scale-125
                  cursor-grab duration-150 absolute left-[95%] sm:left-[6.8%] -translate-x-1/2 `}
                >
                  <Trash2 size={17} className="pointer-events-none" />
                </div>

                {GenerateElements(e, navigate)}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
export default PageSection;
