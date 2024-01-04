import React, { useEffect, useState } from "react";
import * as Admin from "../../style/main/Home.styled";
import { createContext } from "react";
import Trigger from "../atom/navmenu/Trigger";
import List from "../atom/navmenu/List";
import Dropdown from "../atom/navmenu/Dropdown";
import { useToggle } from "../../hooks/useToggle";

interface NavbarProps {
  children: React.ReactNode;
}

interface DropDownContextProps {
  state: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropDownContext = createContext<DropDownContextProps | null>(null);

function NavUl({ children }: NavbarProps) {
  const { state, toggle } = useToggle();
  const providerValue: DropDownContextProps = {
    state,
    toggle,
  };
  return (
    <DropDownContext.Provider value={providerValue}>
      {children}
    </DropDownContext.Provider>
  );
}

export default NavUl;

NavUl.Trigger = Trigger;
NavUl.List = List;
NavUl.Dropdown = Dropdown;
