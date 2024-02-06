import styled from "styled-components";
import { FaCircleCheck } from "react-icons/fa6";

export const StickyBoard = styled.div`
  max-width: 300px;
  width: 100%;
`;
export const StickyBoardInner = styled.div`
  position: sticky;
  right: 0;
  top: 20px;
  padding: 40px 19px;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 8px;
`;

export const ProgressConatainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
`;

export const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProgressTitle = styled.p`
  font-weight: 600;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.GreyScale1};
`;

export const StatusLabel = styled.p`
  font-weight: 600;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.GreyScale1};
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background: #fcf8f8;
  border-radius: 12px;
  margin-bottom: 24px;
`;

export const ProgressFill = styled.div<{ $percent: number }>`
  background: ${({ theme }) => theme.colors.MainColor};
  width: ${(props) => props.$percent}%;
  height: inherit;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
`;

export const Guidance = styled.div`
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;
export const Section = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  position: relative;

  &:before {
    content: "";
    left: 7px;
    top: 20px;
    position: absolute;
    width: 2px;
    height: 100%;
    background: #fcf8f8;
    display: ${(props) => (props.$isActive ? "block" : "none")};
  }
`;

export const CheckIcon = styled(FaCircleCheck)<{
  $isActive: boolean | undefined;
}>`
  font-size: 17px;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.MainColor : theme.colors.grey5};
  margin-bottom: 1px;
`;

export const GuidanceTitle = styled.p<{ $isActive: boolean }>`
  font-size: 16px;
  font-weight: ${(props) => (props.$isActive ? 500 : 300)};
  line-height: 150%;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.GreyScale1 : theme.colors.grey5};
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
`;

export const ListContainer = styled.div`
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

export const List = styled.div<{ $isActive: boolean }>`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  background: ${(props) =>
    props.$isActive ? "rgba(100, 3, 3, 0.03)" : "#fff"};
  border: 1px solid ${(props) => (props.$isActive ? "transparent" : "#FCF8F8")};
`;

export const Title = styled.p<{ $isActive: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.MainColor : theme.colors.grey5};};
`;
