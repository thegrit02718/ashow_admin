import { ReactNode } from "react";
import * as Table from "../../../style/Table.styled";

export interface ITableRow {
  children?: ReactNode;
}

export const TableRow = ({ children }: ITableRow) => {
  return <Table.Tr>{children}</Table.Tr>;
};
