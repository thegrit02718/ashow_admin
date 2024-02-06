import React from "react";
import { createContext, useState } from "react";
import { Option } from "../atom/select/Option";
import List from "../atom/select/List";
import Trigger from "../atom/select/Trigger";
import { FlexBox } from "../atom/select/Flexbox";
import Input from "../atom/select/Input";
import Container from "../atom/select/Container";
import { AptBasicInfoType, FacilityStateType } from "../../types/types";

type SetterOrUpdater<T> = (value: T | ((currVal: T) => T)) => void;

interface SelectType<T> {
  defaultValue: string;
  type: string;
  children?: React.ReactNode;
  state: T;
  setState: SetterOrUpdater<T>;
}

interface SelectContextProps<T> {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  isOptionsVisible: boolean;
  toggleOptionsVisibility: () => void;
  state: T;
  type: string;
  setState: SetterOrUpdater<T>;
}

export const SelectContext = createContext<SelectContextProps<any> | null>(
  null
);

export const Select = <T,>({
  defaultValue,
  type,
  children,
  state,
  setState,
}: SelectType<T>): React.ReactElement => {
  const [selected, setSelected] = useState(defaultValue);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const toggleOptionsVisibility = () => {
    setIsOptionsVisible((prev) => !prev);
  };

  const providerValue: SelectContextProps<T> = {
    selected,
    setSelected,
    isOptionsVisible,
    toggleOptionsVisibility,
    state,
    setState,
    type,
  };

  return (
    <SelectContext.Provider value={providerValue}>
      {children}
    </SelectContext.Provider>
  );
};

Select.Option = Option;
Select.Container = Container;
Select.List = List;
Select.Trigger = Trigger;
Select.Input = Input;
