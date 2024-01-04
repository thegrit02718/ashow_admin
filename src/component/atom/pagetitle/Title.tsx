import React from "react";
import * as Component from "../../../style/component/title/pagetitle.styled";
interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return (
    <Component.TitleBox>
      <Component.Bar />
      <Component.Title>{children}</Component.Title>
    </Component.TitleBox>
  );
}

export default Title;
