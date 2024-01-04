import styled from "styled-components";
import { GoPlus } from "react-icons/go";
import { TbCameraPlus } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

export const Wrapper = styled.div`
  width: "100%";
  height: "100%";
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`;

export const List = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey3};
  padding: 0 16px;
`;

export const Trigger = styled.button<{ $active: string }>`
  font-family: ;
  font-size: 13px;
  border-radius: 5px 5px 0 0;
  height: 40px;
  padding: 8px;
  position: relative;
  color: ${({ $active, theme }) =>
    $active === "true" ? theme.colors.black : theme.colors.Greyscale4};
  font-weight: 500;
  min-width: fit-content;
  transition: all 0.2s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    transition: all 0.2s ease-in-out;
    background: ${({ $active, theme }) =>
      $active === "true" ? theme.colors.MainColor : "transparent"};
  }
`;

export const Empty = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Panel = styled.div<{ value: boolean }>`
  display: ${(props) => (props.value ? "block" : "none")};
  box-sizing: border-box;
  max-width: 100%;
  border-top: none;
`;

export const PanelInner = styled.div`
  padding: 20px 24px;
  width: calc(1000px - 80px);
  min-height: 300px;
  overflow: hidden;
`;
export const FlexbBox = styled.div`
  display: flex;
  align-items: center;
  gap: 18px 20px;
`;

export const CommentBox = styled.div`
  padding: 16px 12px;
  background: #fcf8f8;
  display: flex;
  flex-direction: column;
  gap: 5px 0;
`;
export const CommentList = styled.div`
  display: flex;
  gap: 0 10px;
  align-items: center;
`;
export const CommentItem = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #4e5968;
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  height: 150px;
  border: 2px dashed ${({ theme }) => theme.colors.grey4};
  justify-content: center;
  cursor: pointer;
`;
export const PlusIcon = styled(GoPlus)`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.Greyscale4};
`;
export const UploadText = styled.button`
  padding: 3px 10px;
  color: ${({ theme }) => theme.colors.Greyscale3};
  border: 1px solid ${({ theme }) => theme.colors.Grayscale4};
  border-radius: 4px;
  width: 85px;
`;
export const ImageListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px 0;
  min-height: 250px;
`;

export const ImageItemBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 40px;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  height: 100%;
`;
export const ImageBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  box-shadow: 2px 3px 2px -1px rgb(48 48 48 / 10%);
  width: 212px;
  height: 150px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const LabelInner = styled.div`
  height: 100%;
`;
export const ImageUploadIcon = styled(TbCameraPlus)`
  font-size: 60px;
  color: ${({ theme }) => theme.colors.grey2};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
export const DeleteIcon = styled(IoMdClose)`
  font-size: 20px;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
  color: #ec908d;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export const ImageFilesizeBox = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 0px;
  gap: 0 4px;
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 11px;
`;

export const ImageFilesize = styled.p`
  display: flex;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

export const CurrentFileSize = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.MainColor};
`;

export const EmptyListBox = styled.div`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey5};
`;
