import React, { ReactElement, createContext, useState } from "react";
import List from "../atom/tabs/List";
import Trigger from "../atom/tabs/Trigger";
import Panel from "../atom/tabs/Panel";
import * as Tab from "../../style/component/tab/Tabs.styled";
import ImagePanel from "../atom/tabs/ImagePanel";

type SetterOrUpdater<T> = (value: T | ((currVal: T) => T)) => void;

interface TabsProps<T> {
  children: React.ReactNode;
  state: T;
  setState: SetterOrUpdater<T>;
  category?: string[];
}

interface TabsContextProps<T> {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  state: T;
  setState: SetterOrUpdater<T>;
  categories?: string;
}

export const TabsContext = createContext<TabsContextProps<any> | null>(null);

const Tabs = <T,>({
  children,
  state,
  setState,
  category,
}: TabsProps<T>): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [categories, setCategories] = useState(
    category ? category[selectedIndex] : ""
  );
  const providerValue: TabsContextProps<T> = {
    selectedIndex,
    setSelectedIndex,
    state,
    setState,
    categories,
  };

  return (
    <TabsContext.Provider value={providerValue}>
      <Tab.Wrapper>{children}</Tab.Wrapper>
    </TabsContext.Provider>
  );
};

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Panel = Panel;
Tabs.ImagePanel = ImagePanel;
export default Tabs;
