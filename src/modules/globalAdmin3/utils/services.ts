import { storeTask } from "@/store/globalAdmin3/taskStore";
import type { task } from "../types";

const setTasks = storeTask.getState().setTasks;

export const clickImgCfg = (
  e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  id: number
) => {
  const tasks = storeTask.getState().tasks;

  const target = e.target as HTMLElement;
  const containerUl = target.parentElement?.parentElement as HTMLElement;
  const type = containerUl.getAttribute("data-ul");
  console.log("typedelete", type);
  const copytTasks = [...tasks];
  const test = copytTasks.filter((e) => e.id !== id);

  setTasks(test);
};

export const clickImgPencil = (
  e: React.MouseEvent<HTMLImageElement, MouseEvent>
) => {
  const target = e.target as HTMLElement;
  const divTask = target.parentElement?.querySelector(
    "[data-li=task]"
  ) as HTMLElement;

  const range = document.createRange();
  const sel = window.getSelection();
  divTask.contentEditable = "true";
  const value = divTask.innerText.length;
  range.setStart(divTask.childNodes[0], value);
  range.collapse(true);
  if (sel) {
    sel.removeAllRanges();
    sel.addRange(range);
  }
  divTask.focus();
  console.log("divtask", divTask);
};

export const blurTask = (e: React.FocusEvent<HTMLDivElement, Element>) => {
  const divTask = e.target as HTMLElement;
  const value = divTask.innerText;
  const taskSelected = storeTask.getState().taskSelected;
  const tasks = storeTask.getState().tasks;
  console.log("blurtaksss !!!!!", value);

  if (taskSelected) {
    const copytTasks = [...tasks];
    const current = copytTasks.find((e) => e.id === taskSelected.id);
    console.log("currrentt", current);

    if (current) {
      current.task = value;
      setTasks(copytTasks);
    }
  }
};

export const oninputTask = (e: React.FormEvent<HTMLDivElement>) => {
  const divTask = e.target as HTMLElement;
  const taskProfileData = document.getElementById("taskProfileData");
  if (taskProfileData) {
    const value = divTask.innerText;
    taskProfileData.innerText = value;
  }

  //console.log("blur taskddddddddddd", divTask);

  //setTimeout(() => {
  // const range = document.createRange();
  // const sel = window.getSelection();
  // range.setStart(divTask.childNodes[0], value.length);
  // range.collapse(true);
  // if (sel) {
  //   sel.removeAllRanges();
  //   sel.addRange(range);
  //   //      divTask.focus();
  // }

  // }, 0);
};

export const dragstartTask = (e: React.DragEvent<HTMLLIElement>) => {
  const target = e.target as HTMLElement;
  const li = target.closest("[data-li=parent]") as HTMLElement;
  const containersUL = document.querySelectorAll(
    "[data-ul]"
  ) as NodeListOf<HTMLElement>;

  li.classList.add("dragging");
  li.classList.add("opacity-50");
  for (const element of containersUL) {
    for (const i of element.children) {
      if (!i.classList.contains("dragging"))
        i.classList.add("pointer-events-none");
    }
  }

  const container = target.closest("[data-ul]") as HTMLElement;
  console.log("container", container);
  const taskId = li.getAttribute("data-task-id") as string;
  const arrow = document.getElementById("arrow") as HTMLElement;
  arrow.setAttribute("data-task-id", taskId);
  arrow.classList.remove("hidden");
  arrow.classList.add("flex");
  container.appendChild(arrow);
  li.removeAttribute("data-task-id");
  console.log("dragstartttttttttttttttt", taskId);
  console.log("arrowwww", arrow);
};

export const dragendTask = () => {
  const tasks = storeTask.getState().tasks;

  const Page = document.getElementById("page") as HTMLElement;
  const arrow = document.getElementById("arrow") as HTMLElement;

  arrow.classList.remove("flex");
  arrow.classList.add("hidden");

  const containersUL = document.querySelectorAll(
    "[data-ul]"
  ) as NodeListOf<HTMLElement>;

  const sortedTasks: task[] = [];
  const tasksCopy = [...tasks];
  for (const i of containersUL) {
    const lifetime = i.getAttribute("data-ul") as string;
    console.log("lifetimeee", lifetime);

    for (const child of i.children) {
      const id = child.getAttribute("data-task-id") as string;
      console.log("draendddddddddddid", child);

      const task = tasksCopy.find((e) => e.id === Number.parseInt(id));
      console.log("idd", id);

      if (task) {
        task.lifetime = lifetime;
        sortedTasks.push(task);
      }
    }
  }
  console.log("sortedtadsdf", sortedTasks);

  for (const element of containersUL) {
    for (const i of element.children) {
      i.classList.remove("pointer-events-none");
    }
  }
  Page.append(arrow);

  setTasks([]);
  setTimeout(() => {
    setTasks(sortedTasks);
  }, 0);
};

export const dragoverUL = (e: React.DragEvent<HTMLElement>) => {
  e.preventDefault();
  const target = e.target as HTMLElement;
  const container = target.closest("[data-task]") as HTMLElement;
  const containerUL = container.querySelector("[data-ul]") as HTMLElement;
  console.log("containerUL", containerUL);

  const arrow = document.getElementById("arrow") as HTMLElement;
  const result: HTMLElement[] = [];

  const childs = [...containerUL.children] as HTMLElement[];
  for (const i of childs) {
    if (!i.classList.contains("dragging") && !i.classList.contains("arrow")) {
      result.push(i);
    }
  }
  console.log("arrow", arrow);
  if (result.length) {
    const nextSibling = result.find((sibling) => {
      return (
        e.clientY <=
        sibling.getBoundingClientRect().top + sibling.offsetHeight / 2
      );
    }) as Node;
    containerUL.insertBefore(arrow, nextSibling);
  } else {
    containerUL.appendChild(arrow);
  }
};

export const dragenterUL = (e: React.DragEvent<HTMLElement>) => {
  const target = e.target as HTMLElement;
  const container = target.closest("[data-task]") as HTMLElement;
  const containerUL = container.querySelector("[data-ul]") as HTMLElement;
  const arrow = document.getElementById("arrow") as HTMLElement;

  console.log("draggenterrrrringgggggggggg", containerUL);

  containerUL.appendChild(arrow);
};
