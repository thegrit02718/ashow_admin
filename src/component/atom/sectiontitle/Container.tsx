import React from "react";
import * as Component from "../../../style/component/title/sectiontitle.styled";
interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <Component.Container>{children}</Component.Container>;
}

export default Container;
