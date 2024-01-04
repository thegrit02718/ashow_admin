import React from "react";
import * as Component from "../../../style/component/inputfiled/InputFiled.styled";

interface UnitProps {
  children: React.ReactNode;
}

function Unit({ children }: UnitProps) {
  return <Component.Unit>{children}</Component.Unit>;
}

export default Unit;
