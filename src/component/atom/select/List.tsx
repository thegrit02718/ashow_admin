import React, { useContext } from "react";
import { SelectContext } from "../../molecule/Select";
import * as Select from "../../../style/component/select/Select.styled";

interface ListProps {
  children: React.ReactNode;
}

function List({ children }: ListProps) {
  const context = useContext(SelectContext);

  if (context) {
    const { isOptionsVisible } = context;
    return (
      <Select.Ul $visible={isOptionsVisible.toString()}>{children}</Select.Ul>
    );
  }
  return null;
}

export default List;
