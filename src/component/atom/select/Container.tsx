import React, { useContext } from "react";
import * as Select from "../../../style/component/select/Select.styled";

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <Select.Container>{children}</Select.Container>;
}

export default Container;
