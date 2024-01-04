import { useContext } from "react";
import { TabsContext } from "../../molecule/Tabs";
import * as Tab from "../../../style/component/tab/Tabs.styled";
interface TriggerProps {
  value: number;
  text: string;
  disabled?: boolean;
}

export default function Trigger({
  value,
  text,
  disabled = false,
}: TriggerProps) {
  const context = useContext(TabsContext);
  const isActive = context?.selectedIndex === value;
  const handlePress = () => {
    if (context) {
      context.setSelectedIndex(value);
    }
  };

  return (
    <Tab.Trigger
      disabled={disabled}
      onClick={handlePress}
      $active={isActive.toString()}
    >
      {text}
    </Tab.Trigger>
  );
}
