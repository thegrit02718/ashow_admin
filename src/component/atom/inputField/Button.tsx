import React from "react";
import * as Component from "../../../style/component/inputfiled/InputFiled.styled";
interface ButtonProps {
  event: () => void;
  children: React.ReactNode;
}

function Button({ event, children }: ButtonProps) {
  return <Component.Button onClick={event}>{children}</Component.Button>;
}

export default Button;
