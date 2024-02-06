import styled from "styled-components";
import BasicInput from "../../component/BasicInput";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

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

export const Content = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 40px 0;
`;
export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;
export const InputContainer = styled.div<{ $columns?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$columns ? "column" : "row")};
  align-items: ${(props) => (props.$columns ? "flex-start" : "center")};
  gap: ${(props) => (props.$columns ? "10px 0" : "0 20px")};
`;

export const Sectiontitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  min-width: fit-content;
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5px;
`;

export const Input = styled(BasicInput)`
  border: none;
  font-size: 12px;
  max-width: 70px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};
  padding: 5px 10px;
  font-weight: 600;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #737373;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ConfirmBtn = styled.button`
  font-size: 13px;
  padding: 7px 20px;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.DefaultText};
  font-weight: 600;
  background: ${({ theme }) => theme.colors.MainColor};
  box-shadow: 1px 2px 5px -1px rgb(0 0 0 / 27%);
`;
export const FloorPlan = styled.div`
  width: 200px;
  height: 150px;
`;
export const ImageBox = styled.div`
  display: flex;
  gap: 0 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: contain;
`;

export const EmptyBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
  cursor: pointer;
`;
export const PlusIcon = styled(FaPlus)`
  font-size: 20px;
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
  padding: 10px;

  &:focus {
    outline: none;
  }
`;
