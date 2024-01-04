import React from "react";
import * as Tab from "../../../style/component/tab/Tabs.styled";

interface ListProps {
  children: React.ReactNode;
}

function List({ children }: ListProps) {
  return <Tab.List>{children}</Tab.List>;
}

export default List;
