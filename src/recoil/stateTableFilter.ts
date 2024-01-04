import { atom } from "recoil";
import { IData } from "../types/Tabletype";

interface SortingState {
  columnName?: keyof IData;
  order?: "asc" | "desc";
}

export const sortingState = atom<SortingState>({
  key: "buttonState",
  default: {
    columnName: "" as keyof IData,
    order: "" as "asc" | "desc",
  },
});
