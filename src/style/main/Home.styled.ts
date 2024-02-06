import styled from "styled-components";
import { IoMdInformationCircle } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

export const Header = styled.header`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};
  padding: 20px 40px;
  box-sizing: border-box;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 0;
  left: 0;
`;

export const UtilContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  gap: 0 40px;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 0 8px;
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    width: 1px;
    height: 18px;
    background: ${({ theme }) => theme.colors.grey5};
    position: absolute;
    top: 50%;
    left: -50%;
    transform: translate(20px, -50%);
  }
`;
export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0 24px;
`;
export const InfoIcon = styled(IoMdInformationCircle)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.grey5};
  cursor: pointer;
`;

export const BellIcon = styled(FaBell)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.grey5};
  cursor: pointer;
`;

export const ArrowBottom = styled(TiArrowSortedDown)`
  color: ${({ theme }) => theme.colors.grey5};
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const UserName = styled.p`
  font-size: 16px;
`;
export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`;
export const Content = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export const ContentHeader = styled.div`
  height: 64px;
  background: #fff;
  padding: 0 30px;
  display: flex;
  align-items: center;
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};
  width: 100%;
`;

export const ContentTitle = styled.p`
  font-family: ;
  font-size: 18px;
`;

export const ContentInner = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  gap: 25px 0;
  margin-top: 64px;
  padding: 45px 40px;
  overflow-y: scroll;
  position: relative;
`;
