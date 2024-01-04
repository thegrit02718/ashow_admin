import React from "react";
import * as Component from "../../../style/component/title/sectiontitle.styled";

interface SubTitleProps {
  children: React.ReactNode;
}

function SubTitle({ children }: SubTitleProps) {
  return <Component.SubTitle>{children}</Component.SubTitle>;
}

export default SubTitle;
