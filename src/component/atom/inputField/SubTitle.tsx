import React from "react";
import * as Component from "../../../style/component/inputfiled/InputFiled.styled";

interface SubTitleProps {
  children: React.ReactNode;
}

function SubTitle({ children }: SubTitleProps) {
  return <Component.Subtitle>{children}</Component.Subtitle>;
}

export default SubTitle;
