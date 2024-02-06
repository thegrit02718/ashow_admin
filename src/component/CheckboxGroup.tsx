import { createContext, SetStateAction } from "react";

interface CheckboxContextType {
  isDisabled: (disabled: boolean) => boolean;
  isChecked: (value: number) => boolean;
  toggleValue: ({ checked, value }: { checked: boolean; value: any }) => void;
}
interface CheckboxGroupType {
  children: React.ReactNode;
  disabled?: boolean;
  values: number[];
  onChange: React.Dispatch<SetStateAction<number[]>>;
}

export const CheckboxContext = createContext<CheckboxContextType | null>(null);

export function CheckboxGroup({
  children,
  disabled,
  values,
  onChange,
}: CheckboxGroupType) {
  const isDisabled = (disabled: boolean) => disabled;

  const isChecked = (value: number) => values.includes(value);

  const toggleValue = ({
    checked,
    value,
  }: {
    checked: boolean;
    value: number;
  }) => {
    if (!checked) {
      onChange(values.concat(value));
    } else {
      onChange(values.filter((v: number) => v !== value));
    }
  };

  return (
    <CheckboxContext.Provider value={{ isDisabled, isChecked, toggleValue }}>
      {children}
    </CheckboxContext.Provider>
  );
}
