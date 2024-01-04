import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RiMore2Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";

type TextAlign = "right" | "center" | "left";
type TextInputProps = {
  $textalign?: TextAlign;
};

export const Board = styled.div`
  max-width: 930px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SectionTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 35px;
`;
export const Section = styled.div`
  display: grid;
  gap: 60px;
  grid-template-columns: repeat(1, 1fr);
`;

export const FlexRow = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
`;

export const UnitContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: fit-content;
  gap: 0 8px;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Accent = styled.p`
  color: ${({ theme }) => theme.colors.grey5};
  font-weight: 500;
`;
export const Title = styled.p`
  font-size: 14px;
  height: fit-content;
  font-weight: 600;f
  color: ${({ theme }) => theme.colors.grey2};
`;
export const ButtonBox = styled.div`
  position: relative;
`;
export const TextButton = styled.button`
  width: 100%;
`;
export const FlexBox = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => (props.direction === "row" ? "4px" : "8px")};
}
`;

// AptBasicInfo

export const AddressField = styled.button`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.inputField.border};
  background: ${({ theme }) => theme.colors.grey3};
  color: #b0b0b0;
  font-family: ;
  border-radius: 2px;
  height: 30px;
  cursor: auto;
`;
export const SearchBtn = styled.button`
  background: #306393;
  min-width: fit-content;
  color: white;
  font-size: 12px;
  font-family: ;
  padding: 6px 20px;
  border-radius: 0 2px 2px 0;
  letter-spacing: 0.5px;
`;
export const Container = styled.div`
  position: relative;
  display: grid;
  gap: 13px 0;
`;

export const Message = styled.p`
  font-size: 11px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.red};
`;
export const Grid = styled.div<{ $row: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.$row};
  gap: 30px;
  align-items: end;
`;
export const RestAddressField = styled.input<{ $isvalue: string }>`
  height: 30px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.inputField.border};
  background: ${({ $isvalue }) =>
    $isvalue === "true" ? "#ffffff" : "#ececec"};
  font-family: ;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #c4c4c4;
  }
`;
export const ImageBox = styled.div`
  width: 100%;
  max-height: 235px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.inputField.border};
  background: ${({ theme }) => theme.inputField.background};
  cursor: pointer;
`;
export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  padding: 0 10px 6px 10px;
  gap: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
`;
export const TextInput = styled.input<TextInputProps>`
  border: none;
  width: 100%;
  font-size: 12px;
  letter-spacing: 0.3px;
  background: transparent;
  font-weight: 600;
  text-align: ${(props) => props.$textalign};
  font-family: ;
  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey2};
  min-width: fit-content;
  font-size: 13px;
`;

export const TextBox = styled.div`
  padding: 0 10px 10px 10px;
  display: flex;
  align-items: center;
`;

export const CalendarIcon = styled(FaCalendarAlt)`
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.MainColor};
`;
export const CalendarIconBox = styled.div`
  position: relative;
`;

export const Calendar = styled.div`
  position: absolute;
  width: 370px;
  background: #fff;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 1px 2px 7px 1px rgba(0, 0, 0, 0.1);
  left: -15px;
  top: 35px;
  z-index: 100;
`;

export const Btn = styled.button`
  padding: 10px 20px;
  width: 80px;
  border-radius: 3px;
  font-size: 13px;
  letter-spacing: 1px;
`;

export const SaveBtn = styled(Btn)`
  background: ${({ theme }) => theme.colors.MainColor};
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.1);
  font-family: ;
  font-weight: 600;
  color: #f9f9f9;
`;
export const BackBtn = styled(Btn)`
  background: ${({ theme }) => theme.colors.grey3};
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.1);
  font-family: ;
  color: #5d5d5d;
  font-weight: 600;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0 10px;
  margin-top: 60px;
`;

// AptPhyeongInfo
export const Card = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;
export const AddBtn = styled.button`
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.grey3};
  padding: 5px 10px;
  font-family: ;
  font-weight: 500;
  border-radius: 3px;
  color: #f9f9f9;
  display: flex;
  align-items: center;
  gap: 0 5px;
  box-shadow: 2px 3px 10px 1px rgb(82 82 82 / 10%);
  color: #3a3a3a;
`;

export const AddIcon = styled(FaPlus)`
  font-size: 13px;
`;

export const Th = styled.th<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : "100px")};
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
  padding: 10px;
  background: #eff0d6;
`;
export const ThTitle = styled.p``;

export const Td = styled.td<{ width?: string }>`
  font-size: 13px;
  font-weight: 600;
  padding: 15px 10px;
  text-align: center;
  position: relative;
`;
export const TdTitle = styled.p``;
export const Table = styled.table`
  width: 100%;
  border: 1px solid #d1d1d1;
`;
export const Tr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};
`;
export const ManageIcon = styled(RiMore2Fill)`
  font-size: 15px;
  cursor: pointer;
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 1px;
`;
export const Unit = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.black};
`;
export const ModifyIcon = styled(MdModeEditOutline)`
  font-size: 13px;
  margin-bottom: 2px;
`;
export const DropDown = styled.ul`
  border: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
  border-radius: 3px;
  background: #fff;
  position: absolute;
  right: -50%;
  bottom: -50%;
  transform: translate(-50%, 50%);
  z-index: 2;
  box-shadow: 2px 2px 6px 1px rgb(133 133 133 / 10%);
`;
export const DropDownList = styled.li`
  display: flex;
  padding: 10px 10px;
  width: 65px;
  gap: 0 5px;
  cursor: pointer;
  align-items: center;
  &:hover {
    background: #f1f1f1;
  }
`;
export const DropDownText = styled.p`
  font-size: 12px;
  font-weight: 500;
`;
export const DeleteIcon = styled(AiFillDelete)`
  font-size: 13px;
  margin-bottom: 2px;
`;

export const InfoIcon = styled(IoMdInformationCircleOutline)`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  cursor: pointer;
`;
