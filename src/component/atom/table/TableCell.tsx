import { ReactNode } from "react";
import * as Table from "../../../style/Table.styled";
import { useSetRecoilState } from "recoil";
import { sortingState } from "../../../recoil/stateTableFilter";
import { IData } from "../../../types/Tabletype";

export interface ITableCell {
  children?: ReactNode;
  header?: boolean;
  width?: number;
  onSort?: boolean;
  columnName?: string;
}
export const TableCell = ({
  children,
  header,
  width,
  onSort,
  columnName,
}: ITableCell) => {
  const setSort = useSetRecoilState(sortingState);
  return (
    <>
      {header ? (
        <Table.Th width={width}>
          <Table.FlexBox>
            {children}
            {onSort && (
              <Table.ArrowBox>
                <Table.UpArrow
                  onClick={() =>
                    setSort({
                      columnName: String(columnName!) as keyof IData,
                      order: "asc",
                    })
                  }
                />
                <Table.DownArrow
                  onClick={() =>
                    setSort({
                      columnName: String(columnName!) as keyof IData,
                      order: "desc",
                    })
                  }
                />
              </Table.ArrowBox>
            )}
          </Table.FlexBox>
        </Table.Th>
      ) : (
        <Table.Td width={width}>{children}</Table.Td>
      )}
    </>
  );
};
