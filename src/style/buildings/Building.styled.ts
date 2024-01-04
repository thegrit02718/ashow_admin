import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";
import { GrSearch } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { IoSquareOutline } from "react-icons/io5";

export const Board = styled.div`
  padding: 25px;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: flex;
  gap: 0 20px;
  flex-direction: column;

  gap: 15px 0;
`;
export const Container = styled.div``;
export const SearchField = styled.div`
  display: flex;
  padding: 0.7rem;
  gap: 0 10px;
  border-radius: 3px;
  background: #fff;
`;
export const SearchInput = styled.input`
  border: 1px solid #c5c5c5;
  font-size: 14px;
  border-radius: 3px;
  letter-spacing: 0.4px;
  font-weight: 600;
  width: 250px;
  height: 35px;
  box-sizing: border-box;
  padding: 10px;

  &::placeholder {
    color: #cecece;
  }
  &:focus {
    outline: none;
  }
`;

export const SerachIcons = styled(IoMdSearch)`
  font-size: 22px;
`;

/* export const GroupList = styled.div`
  background: #fff;
  min-width: 200px;
  height: 70%;

  box-sizing: border-box;
`;
 */
/* export const AddButton = styled.button`
  width: 100%;
  padding: 18px 30px;
  font-family: ;
  font-weight: 600;
  text-align: left;
  color: #b574ae;
`;
 */
/* export const List = styled.div<{ isclicked?: string }>`
  width: 100%;
  padding: 18px 30px;
  font-size: 13px;
  font-family: ;
  font-weight: 600;
  text-align: left;
  background: ${(props) => (props.isclicked === "true" ? "#5a5d7f" : "none")};
  color: ${(props) => (props.isclicked === "true" ? "#fff" : "normal")};
  cursor: pointer;
`; */
export const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SearchContainer = styled.div`
  gap: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInputBox = styled.div`
  padding: 2px;
  display: flex;
  border-radius: 5px 0 0 5px;
`;
export const SearchIcon = styled(GrSearch)``;
export const SearchButton = styled.button`
  padding: 7px 10px;
  border-radius: 3px;
  min-width: 90px;
  height: 39px;
  background: ${({ theme }) => theme.colors.SubColor};
  display: flex;
  align-items: center;
  font-family: ;
  gap: 0 5px;
  font-size: 14px;
  color: white;
  justify-content: center;
`;

export const Utils = styled.div`
  display: flex;
  gap: 0 10px;
`;
export const UtilsButton = styled.button`
  font-family: ;
  height: 35px;
  width: 90px;
  color: #fff;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.SubColor};
  display: flex;
  gap: 0 5px;
  align-items: center;
  justify-content: center;
`;
export const PlusIcon = styled(FaPlus)`
  font-size: 12px;
  color: #fff;
`;
export const ItemList = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SectionTitle = styled.div<{ color?: string }>`
  font-size: 15px;
  font-weight: 500;
  display: flex;
  gap: 0 5px;
`;
export const Accent = styled.p`
  color: ${({ theme }) => theme.colors.MainColor};
`;
export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  margin-top: 30px;
`;

export const Table = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
`;
export const Tr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
`;

export const Th = styled.th`
  font-size: 0.7rem;
  padding: 10px;
  background: ${({ theme }) => theme.colors.yellow};

  &:first-child {
  }
  &:nth-child(2) {
    width: 5%;
  }
  &:nth-child(3) {
    min-width: 15%;
  }
  &:nth-child(4) {
    min-width: 15%;
  }
  &:nth-child(5) {
    width: 20%;
  }
  &:nth-child(7) {
    min-width: 10%;
  }
`;

export const Td = styled.td`
  font-size: 0.7rem;
  line-height: 15px;
  padding: 10px;
  word-break: keep-all;
  text-align: center;
`;
export const Label = styled.label`
  display: flex;
  justify-content: center;
`;
export const CheckBox = styled.div`
  width: 20px;
  height: 20px;
`;
export const Checked = styled(MdCheckBox)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.MainColor};
`;
export const Unchecked = styled(IoSquareOutline)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.black};
`;
/* export const ThCheckBox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
`; */

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 10px;
`;
export const AptImage = styled.img`
  height: 85px;
`;

export const StatusBtn = styled.button`
  min-width: 40px;
  padding: 3px 8px;
  font-size: 10px;
  border-radius: 3px;
  background: #dfdfdf;
  font-weight: 600;
  color: #474747;
  font-family: ;
`;
export const ManageBox = styled.button`
  min-width: fit-content;
  padding: 5px 8px;
  font-size: 0.7rem;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.MainColor};
  font-weight: 500;
  color: white;
  font-family: ;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ArrowBox = styled.div`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
  border-radius: 2px;
`;
export const ArrowPrev = styled(RiArrowLeftSLine)`
  font-size: 18px;
`;
export const ArrowNext = styled(RiArrowRightSLine)`
  font-size: 18px;
`;

export const ArrowFirstPage = styled(MdKeyboardDoubleArrowLeft)``;
export const ArrowLastPage = styled(MdKeyboardDoubleArrowRight)``;
