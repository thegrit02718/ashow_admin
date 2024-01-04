import React, { useContext, useState, useEffect } from "react";
import * as Admin from "../../../style/component/navmenu/navmenu.styled";
import { DropDownContext } from "../../molecule/NavUl";

interface DropdownProps {
  children: React.ReactNode;
}

function Dropdown({ children }: DropdownProps) {
  const context = useContext(DropDownContext);
  const [visibilityAnimation, setVisibilityAnimation] = useState(true);
  const [repeat, setRepeat] = useState<NodeJS.Timeout | undefined>(undefined);
  useEffect(() => {
    if (context) {
      const { state, toggle } = context;

      if (state) {
        clearTimeout(repeat);
        setRepeat(undefined);
        setVisibilityAnimation(true);
      } else {
        setRepeat(
          setTimeout(() => {
            setVisibilityAnimation(false);
          }, 400)
        );
      }
    }
    return () => {
      if (repeat) {
        clearTimeout(repeat);
      }
    };
  }, [context]);

  if (context) {
    const { state } = context;
    return (
      <Admin.DropDown>
        {
          <Admin.DeepUl $state={state}>
            {visibilityAnimation && children}
          </Admin.DeepUl>
        }
      </Admin.DropDown>
    );
  }
  return null;
}

export default Dropdown;
