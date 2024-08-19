import type { PageElement } from "@/store/administration/pageStore";

export interface task {
  id: number;
  task: string;
  date: Date;
  lifetime: string;
  responsible?: string;
  priority?: string;
  blocked: number[];
  page: PageElement[];
}

export interface taskProfile extends propProfileTask {
  tasks: task[];
  setTasks: (value: task[]) => void;
}

export interface propProfileTask {
  taskSelected: task;
}

export interface lifetimeType {
  whitoutStarting: string;
  inProgress: string;
  completed: string;
  filed: string;
}
