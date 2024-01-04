import React from "react";
import * as Component from "../../../style/component/title/sectiontitle.styled";

interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return <Component.Title>{children}</Component.Title>;
}

export default Title;
