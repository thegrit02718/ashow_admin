import React from "react";
import * as Component from "../../../style/component/inputfiled/InputFiled.styled";
import { InputContext } from "../../molecule/InputField";
import { useContext } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  align?: "left" | "center" | "right";
  disabled?: boolean;
  value?: string;
}

function Input({
  type = "text",
  placeholder,
  align = "left",
  disabled = false,
  value,
}: InputProps) {
  const context = useContext(InputContext);
  if (context) {
    const { actionType, dispatch } = context;
    return (
      <Component.Input
        type={type}
        value={value}
        placeholder={placeholder}
        align={align}
        disabled={disabled}
        onChange={(e) =>
          dispatch({
            type: actionType,
            payload: e.target.value,
          })
        }
      />
    );
  }
  return null;
}

export default Input;
