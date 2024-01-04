import { SetStateAction, useContext } from "react";
import { CheckboxContext } from "./CheckboxGroup";
import * as Admin from "../../style/buildings/Building.styled";
interface CheckBoxProps {
  disabled?: boolean;
  checked?: boolean;
  value: number;
  onChange: React.Dispatch<SetStateAction<number[]>>;
}

export default function Checkbox({
  disabled,
  value,
  checked,
  onChange,
}: CheckBoxProps) {
  const context = useContext(CheckboxContext);

  if (context) {
    const { isDisabled, isChecked, toggleValue } = context;

    const checked = isChecked(value);
    return (
      <Admin.Label htmlFor="check">
        <input
          type="checkbox"
          {...(disabled ? { disabled: isDisabled(disabled) } : {})}
          checked={isChecked(value)}
          onChange={({ target: { checked } }) =>
            toggleValue({ checked, value })
          }
          hidden
        />
        <Admin.CheckBox
          id="check"
          onClick={() => {
            console.log(checked);
            toggleValue({ checked, value });
          }}
        >
          {checked ? <Admin.Checked /> : <Admin.Unchecked />}
        </Admin.CheckBox>
      </Admin.Label>
    );
  }
  return null;
}
