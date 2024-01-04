import React from "react";
import * as Component from "../../../style/component/title/sectiontitle.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return <Component.Button onClick={onClick}>{children}</Component.Button>;
}

export default Button;
