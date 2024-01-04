import React, { useContext, useState, ChangeEvent } from "react";
import { SelectContext } from "../../molecule/Select";
import * as Select from "../../../style/component/select/Select.styled";

function Input() {
  const context = useContext(SelectContext);
  const [inputValue, setInputValue] = useState("");
  if (context) {
    const { selected, setSelected, toggleOptionsVisibility } = context;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
    return (
      <Select.Input
        disabled={selected !== "직접입력"}
        placeholder={selected === "직접입력" ? inputValue : selected}
        value={selected === "직접입력" ? inputValue : selected}
        $direct={(selected !== "직접입력").toString()}
        onChange={handleChange}
      />
    );
  }
  return null;
}

export default Input;
