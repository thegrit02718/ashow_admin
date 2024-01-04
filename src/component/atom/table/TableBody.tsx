import { ReactNode } from "react";

export interface ITableBody<T> {
  data: T[];
  renderRow: (item: T, index: number) => ReactNode;
}

export const TableBody = <T extends unknown>({
  data,
  renderRow,
}: ITableBody<T>) => {
  return <tbody>{data.map(renderRow)}</tbody>;
};
