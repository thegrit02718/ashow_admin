import styled from "styled-components";

export const Board = styled.div`
  width: 100%;
  height: 100%;
  max-width: 930px;
  overflow-y: scroll;
  padding-right: 40px;
  &::-webkit-scrollbar {
    display: none;
  }

  & .ql-editor {
    padding: 20px;
  }

  & .ql-toolbar {
    border-radius: 5px 5px 0 0;
    background: #f8f9fd;
  }
  & .ql-container {
    border-radius: 0 0 5px 5px;
    font-family: "Wanted Sans Variable", "Wanted Sans", -apple-system,
      BlinkMacSystemFont, system-ui, "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
  }
  & .ql-toolbar.ql-snow {
    border: 1px solid ${({ theme }) => theme.colors.grey4} !important;
  }
  & .ql-container.ql-snow {
    border: 1px solid ${({ theme }) => theme.colors.grey4} !important;
    height: calc(100% - 50px);
  }
  & .quill {
    height: calc(100% - 80px);
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px 0;
  height: 100%;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;
export const InputField = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  height: 48px;
  border-radius: 4px;
  padding: 10px 15px;
  box-sizing: border-box;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.grey5};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0 24px;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 12px 0;
  width: 140px;
  border-radius: 4px;
  font-size: 16px;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const BackButton = styled(Button)`
  color: ${({ theme }) => theme.colors.MainColor};
  border: 1px solid ${({ theme }) => theme.colors.MainColor};
`;

export const SaveButton = styled(Button)`
  background: ${({ theme }) => theme.colors.MainColor};
  color: white;
`;
