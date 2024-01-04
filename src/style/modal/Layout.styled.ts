import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
`;
export const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;
export const Modal = styled.div<{ $width: number }>`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);
  max-width: ${(props) => props.$width}px;
  width: 100%;
  box-shadow: 2px 0px 8px -1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;
export const Header = styled.div`
  color: ${({ theme }) => theme.colors.GreyScale1};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;
export const ModalInner = styled.div`
  background: #fff;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;

export const Section = styled.div``;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 20px;
  cursor: pointer;
`;
export const ModalTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
export const ModalContent = styled.div``;
