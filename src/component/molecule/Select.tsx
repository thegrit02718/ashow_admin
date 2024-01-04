import React from "react";
import { createContext, useState } from "react";
import { Option } from "../atom/select/Option";
import List from "../atom/select/List";
import Trigger from "../atom/select/Trigger";
import { FlexBox } from "../atom/select/Flexbox";
import Input from "../atom/select/Input";
import Container from "../atom/select/Container";

interface SelectType {
  defaultValue: string;
  dispatch?: React.Dispatch<any>;
  type: string;
  children: React.ReactNode;
}

interface SelectContextProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  isOptionsVisible: boolean;
  toggleOptionsVisibility: () => void;
  dispatch?: React.Dispatch<any>;
  type: string;
}

export const SelectContext = createContext<SelectContextProps | null>(null);

export const Select = ({
  defaultValue,
  dispatch,
  type,
  children,
}: SelectType): React.ReactElement => {
  const [selected, setSelected] = useState(defaultValue);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const toggleOptionsVisibility = () => {
    setIsOptionsVisible((prev) => !prev);
  };

  const providerValue: SelectContextProps = {
    selected,
    setSelected,
    isOptionsVisible,
    toggleOptionsVisibility,
    dispatch,
    type,
  };
  return (
    <SelectContext.Provider value={providerValue}>
      {children}
    </SelectContext.Provider>
  );
};
Select.FlexBox = FlexBox;
Select.Option = Option;
Select.Container = Container;
Select.List = List;
Select.Trigger = Trigger;
Select.Input = Input;
