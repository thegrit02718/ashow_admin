import React, { useContext, useState, ChangeEvent, useEffect } from "react";
import { SelectContext } from "../../molecule/Select";
import * as Select from "../../../style/component/select/Select.styled";

function Input() {
  const context = useContext(SelectContext);
  const [inputValue, setInputValue] = useState("");

  if (context) {
    const { state, type, selected, setSelected, toggleOptionsVisibility } =
      context;
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
    return (
      <Select.Input
        disabled={selected !== "직접입력"}
        placeholder={
          state[type]
            ? state[type]
            : selected === "직접입력"
            ? inputValue
            : selected
        } // 리코일에 데이터가 있으면 넣고 아니면 선택된 데이터 혹은 직접입력한 데이터 기입
        value={state[type] || selected === "직접입력" ? inputValue : selected}
        $direct={(selected !== "직접입력").toString()}
        onChange={handleChange}
      />
    );
  }
  return null;
}

export default Input;
