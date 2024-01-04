import React from "react";
import * as Component from "../../../style/component/inputfiled/InputFiled.styled";

interface ContainerProps {
  align?: string;
  children: React.ReactNode;
}

function Container({ align = "baseline", children }: ContainerProps) {
  return <Component.Container $align={align}>{children}</Component.Container>;
}

export default Container;
