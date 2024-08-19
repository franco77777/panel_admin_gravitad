import type { task } from "@/modules/globalAdmin3/types";
import { create } from "zustand";

export interface Store {
  tasks: task[];
  setTasks: (value: task[]) => void;
  taskSelected: task | null;
  setTaskSelected: (value: task) => void;
  taskCount: number;
  setTaskCount: () => void;
}

export const storeTask = create<Store>((set) => ({
  tasks: [],
  taskSelected: null,
  taskCount: 0,
  setTasks: (value) => set(() => ({ tasks: value })),
  setTaskSelected: (value) => set(() => ({ taskSelected: value })),
  setTaskCount: () => set((state) => ({ taskCount: state.taskCount + 1 })),
}));
