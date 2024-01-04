import React, { ReactElement, createContext, useState } from "react";
import List from "../atom/tabs/List";
import Trigger from "../atom/tabs/Trigger";
import Panel from "../atom/tabs/Panel";
import * as Tab from "../../style/component/tab/Tabs.styled";
interface TabsProps {
  defaultValue: number;
  children: React.ReactNode;
}

interface TabsContextProps {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const TabsContext = createContext<TabsContextProps | null>(null);

const Tabs = ({ defaultValue = 0, children }: TabsProps): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState<number>(defaultValue);

  const providerValue: TabsContextProps = { selectedIndex, setSelectedIndex };

  return (
    <TabsContext.Provider value={providerValue}>
      <Tab.Wrapper>{children}</Tab.Wrapper>
    </TabsContext.Provider>
  );
};

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Panel = Panel;

export default Tabs;
