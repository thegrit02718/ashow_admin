import { useContext, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import styled from "styled-components";
import { SelectContext } from "../../molecule/Select";

export default function Trigger() {
  const context = useContext(SelectContext);

  useEffect(() => {
    if (context?.selected !== "선택하세요" && context?.selected) {
      context.setState((prev: any) => ({
        ...prev,
        [context?.type]: context.selected,
      }));
    }
  }, [context?.selected]);
  if (context) {
    const { state, type, selected, setSelected, toggleOptionsVisibility } =
      context;

    return (
      <Wrapper onClick={toggleOptionsVisibility}>
        <TriggerText>{state[type] || selected}</TriggerText>
        <TriggetIcon />
      </Wrapper>
    );
  }
  return null;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 135px;
  padding: 7px 16px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 3px;
  cursor: pointer;
  gap: 0 5px;
`;
const TriggerText = styled.p`
  color: #8795a9;
  min-width: fit-content;
  font-size: 16px;

  font-weight: 500;
`;
const TriggetIcon = styled(MdOutlineArrowDropDown)`
  min-width: fit-content;
`;
