import React from "react";
import * as Component from "../../../style/component/inputfiled/InputFiled.styled";

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

function InputBox({ disabled = false, children }: ButtonProps) {
  return (
    <Component.InputBox $isvalue={disabled ? true : false}>
      {children}
    </Component.InputBox>
  );
}

export default InputBox;
