import type { canvas } from "@/modules/canvas/utils/canvasTypes";
import { create } from "zustand";
export interface PageElement {
  id: number;
  canvas?: canvas[];
  url?: string;
  type: string;
  text?: string;
  checks?: number[];
  language?: string;
  fileName?: string;
  fileType?: string;
  html?: HTMLElement;
  fileText?: string;
}
export interface PageStore {
  id: number | null;
  idPage: number | null;
  insert: boolean;
  page: PageElement[];
  focus: number | null;
  setIdPage: (value: number | null) => void;
  setId: (value: number | null) => void;
  setFocus: (value: number | null) => void;
  setPage: (value: PageElement[]) => void;
  setInsert: (value: boolean) => void;
}

export const pageStore = create<PageStore>((set) => ({
  idPage: null,
  id: null,
  page: [],
  insert: false,
  focus: null,
  setId: (value) => set(() => ({ id: value })),
  setIdPage: (value) => set(() => ({ idPage: value })),
  setFocus: (value) => set(() => ({ focus: value })),
  setPage: (value) => set(() => ({ page: value })),
  setInsert: (value) => set(() => ({ insert: value })),
}));
