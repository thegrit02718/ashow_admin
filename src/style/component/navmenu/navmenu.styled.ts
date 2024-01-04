import styled from "styled-components";
import { FaBuilding } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { LuUserCircle2 } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";

export const Sidebar = styled.nav`
  min-width: 260px;
  padding: 24px 32px;
  height: 100vh;
  background: #fff;
  border-right: 1px solid ${({ theme }) => theme.colors.grey3};
  display: flex;
  flex-direction: column;
  gap: 40px 0;
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
  object-fit: contain;
  width: 100%;
  height: 40px;
`;
export const UserName = styled.p`
  font-size: 12px;
  letter-spacing: 0.6px;
  color: ${({ theme }) => theme.colors.DefaultText};
  padding: 20px 0;
  text-align: center;
  border-top: ${({ theme }) => `1px solid ${theme.colors.DarkBorder}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.DarkBorder}`};
`;
export const LogoutBtn = styled.button`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.DefaultText};
`;
export const Trigger = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12.5px 16px;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background: rgba(100, 3, 3, 0.03);
    border-radius: 8px;
    & > div > p {
      color: ${({ theme }) => theme.colors.MainColor};
    }
  }
`;

export const Container = styled.div`
  overflow: hidden;
`;

export const DropDown = styled.ul`
  overflow: hidden;
`;

export const DeepUl = styled.ul<{ $state: boolean }>`
  overflow: hidden;
  @keyframes slide-down {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes slide-up {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-100%);
    }
  }
  animation: ${(props) =>
    props.$state ? "slide-down 0.6s ease" : "slide-up 0.6s ease;"};
  animation-fill-mode: ${(props) => (props.$state ? "forwards" : "none")};
`;
export const DeepLi = styled.li`
  padding: 5px 52px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background: #64030308;
    & > p {
      color: ${({ theme }) => theme.colors.MainColor};
    }
  }
`;
export const LiText = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  font-family: ;
  color: ${({ theme }) => theme.colors.black};
`;
export const BuildingIcon = styled(FaBuilding)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.DefaultText};
`;

export const UserIcon = styled(LuUserCircle2)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
`;
export const PostIcon = styled(IoNewspaperOutline)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
`;
export const ArrowIcon = styled(IoIosArrowDown)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey5};
`;

export const HomeIcon = styled(IoMdHome)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
`;
