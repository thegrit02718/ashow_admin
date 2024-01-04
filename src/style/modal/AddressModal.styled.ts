import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Header = styled.div`
  box-sizing: border-box;
  padding: 10px 20px;
  min-height: 30px;
  display: flex;
  align-items: center;
  box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
`;
export const CloseIcon = styled(AiOutlineClose)`
  font-size: 20px;
  cursor: pointer;
`;
export const ModalTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

export const Content = styled.div``;
