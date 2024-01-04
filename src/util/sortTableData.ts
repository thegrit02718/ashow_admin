import { IData } from "../types/Tabletype";

export function sortData<T>(
  user: T[],
  columnName: keyof IData | undefined,
  order: "asc" | "desc"
) {
  if (!columnName || !order) {
    return user.slice();
  }

  return (user as any[]).slice().sort((a, b) => {
    const aValue = (a as any)[columnName];
    const bValue = (b as any)[columnName];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return order === "asc" ? aValue - bValue : bValue - aValue;
    }

    if (aValue < bValue) {
      return order === "asc" ? -1 : 1;
    } else if (aValue > bValue) {
      return order === "asc" ? 1 : -1;
    } else {
      return 0;
    }
  });
}
