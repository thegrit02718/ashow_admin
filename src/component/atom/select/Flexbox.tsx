import React from "react";
import { useContext } from "react";
import { SelectContext } from "../../molecule/Select";
import styled from "styled-components";

export interface FlexBoxProps {
  children: React.ReactNode;
}

export const FlexBox: React.FC<FlexBoxProps> = ({ children }) => {
  const context = useContext(SelectContext);

  if (context === undefined) {
    throw new Error(
      "<Select.Option> 컴포넌트는 <Select> 컴포넌트 아래에서만 사용될 수 있습니다."
    );
  }

  if (context) {
    return <Container>{children}</Container>;
  }
  return null;
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
