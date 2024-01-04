import styled from "styled-components";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

export const Table = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
`;

export const Th = styled.th<{ width?: number }>`
  justify-content: center;
  font-weight: 600;
  min-width: ${(props) => props.width};
  border-bottom: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
  background: ${({ theme }) => theme.colors.yellow};
  font-size: 0.7rem;
  padding: 10px;

  &:nth-child(1) {
    width: 80px;
  }
`;

export const Td = styled.td`
  font-size: 0.7rem;
  line-height: 15px;
  padding: 10px;
  word-break: keep-all;
  text-align: center;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.inputField.border};
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5px;
  justify-content: center;
  position: relative;
`;
export const ArrowBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -10px;
`;

export const UpArrow = styled(BiSolidUpArrow)`
  font-size: 10px;
  cursor: pointer;
`;

export const DownArrow = styled(BiSolidDownArrow)`
  font-size: 10px;
  cursor: pointer;
  margin-top: -1px;
`;
