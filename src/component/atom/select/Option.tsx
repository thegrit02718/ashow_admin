import React from "react";
import { useContext } from "react";
import { SelectContext } from "../../molecule/Select";
import styled from "styled-components";

export interface OptionsProps {
  value: string;
}

export const Option: React.FC<OptionsProps> = ({ value }) => {
  const context = useContext(SelectContext);

  if (context === undefined) {
    throw new Error(
      "<Select.Option> 컴포넌트는 <Select> 컴포넌트 아래에서만 사용될 수 있습니다."
    );
  }

  if (context) {
    const { selected, setSelected, toggleOptionsVisibility } = context;

    return (
      <Li
        onClick={() => {
          setSelected(value);
          toggleOptionsVisibility();
        }}
      >
        {value}
      </Li>
    );
  }
  return null;
};
const Li = styled.li`
  cursor: pointer;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background: #f7f7f7;
  }
`;
