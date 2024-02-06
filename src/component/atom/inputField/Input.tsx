import React from "react";
import * as Component from "../../../style/component/inputfiled/InputFiled.styled";
import { InputContext } from "../../molecule/InputField";
import { useContext } from "react";

interface InputProps {
  inputType?: string;
  placeholder?: string;
  align?: "left" | "center" | "right";
  disabled?: boolean;
  value?: string;
}

function Input({
  inputType = "text",
  placeholder,
  align = "left",
  disabled = false,
}: InputProps) {
  const context = useContext(InputContext);

  if (context) {
    const { state, setState, type } = context;
    const changeEventHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
      setState((prev: any) => ({ ...prev, [type as string]: e.target.value }));
    };
    return (
      <Component.Input
        type={inputType}
        value={type && state[type] !== 0 ? String(state[type]) : ""}
        placeholder={placeholder}
        align={align}
        disabled={disabled}
        onChange={(e) => changeEventHanlder(e)}
      />
    );
  }
  return null;
}

export default Input;
