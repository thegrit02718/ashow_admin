import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 29px;
`;

export const TitleBox = styled.div`
  display: flex;
  gap: 0 17px;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 26px;
  color: ${({ theme }) => theme.colors.black2};
  font-weight: 600;
  letter-spacing: -0.26px;
`;
export const Bar = styled.div`
  height: 24px;
  width: 4px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.MainColor};
`;

export const SubTitleBox = styled.div`
  display: flex;
  gap: 0 2px;
  align-items: center;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.Greyscale3};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.12px;
`;

export const ArrowIcon = styled(IoIosArrowForward)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.grey5};
`;
