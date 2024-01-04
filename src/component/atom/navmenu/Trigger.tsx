import React, { useContext, ReactElement, useEffect } from "react";
import * as Admin from "../../../style/component/navmenu/navmenu.styled";
import { DropDownContext } from "../../molecule/NavUl";

interface TriggerProps {
  children: React.ReactNode;
  onClick?: () => void;
  hasProps?: boolean;
}

function Trigger({ children, onClick, hasProps }: TriggerProps) {
  const context = useContext(DropDownContext);
  if (context) {
    const { state, toggle } = context;
    const handleClickEvent = () => {
      if (onClick) {
        onClick();
      }
      toggle(!state);
    };
    return (
      <Admin.Trigger onClick={() => handleClickEvent()}>
        <Admin.FlexBox>{children}</Admin.FlexBox>
        {hasProps && <Admin.ArrowIcon />}
      </Admin.Trigger>
    );
  }

  return null;
}

export default Trigger;
