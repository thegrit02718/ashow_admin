import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { IData } from "../../../types/Tabletype";

export interface ITableHeader {
  array: {
    title: string;
    hasSort: boolean;
    columnName?: string;
  }[];
}
export const TableHeader = ({ array }: ITableHeader) => {
  return (
    <thead>
      <TableRow>
        {array.map((item, index) => {
          return (
            <TableCell
              header
              onSort={item.hasSort}
              key={index}
              columnName={item.columnName}
            >
              {item.title}
            </TableCell>
          );
        })}
      </TableRow>
    </thead>
  );
};
