import React from "react";
import * as Admin from "../../../style/component/navmenu/navmenu.styled";

interface ListProps {
  children: React.ReactNode;
  event?: () => void;
}

function List({ children, event }: ListProps) {
  return (
    <Admin.DeepLi onClick={event}>
      <Admin.LiText>{children}</Admin.LiText>
    </Admin.DeepLi>
  );
}

export default List;
