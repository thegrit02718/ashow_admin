import { TableHeader } from "../atom/table/Tableheader";
import { TableBody } from "../atom/table/TableBody";
import { TableRow } from "../atom/table/TableRow";
import { TableCell } from "../atom/table/TableCell";
import { ReactNode } from "react";
import * as Style from "../../style/Table.styled";
import { IData } from "../../types/Tabletype";

export interface IColumn {
  title: string;
  hasSort: boolean;
  columnName?: string | undefined;
}
export interface ITable<T> {
  data: T[];
  columns: IColumn[];
  renderRow: (item: T, index: number) => ReactNode;
}

export const Table = <T extends unknown>({
  columns,
  data,
  renderRow,
}: ITable<T>) => {
  return (
    <Style.Table style={{ borderCollapse: "collapse" }}>
      <Table.Thead array={columns} />
      <Table.Tbody data={data} renderRow={renderRow} />
    </Style.Table>
  );
};

Table.Thead = TableHeader;
Table.Tbody = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
