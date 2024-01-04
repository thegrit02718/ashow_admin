import styled from "styled-components";

export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ContentBox = styled.div`
  display: grid;
  gap: 12px 30px;
  grid-template-columns: 290px 130px 130px;
`;
export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0 3px;
`;
export const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;
export const Accent = styled(Title)`
  color: ${({ theme }) => theme.colors.red};
  margin-top: 5px;
`;

export const Textarea = styled.textarea`
  height: 76px !important;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  padding: 16px;
  box-sizing: border-box;
  border-radius: 4px;
  resize: none;
  font-size: 13px;
  &:focus {
    outline: none;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0 16px;
`;

const Button = styled.button`
  border-radius: 4px;
  height: 45px;
  width: 92px;
  font-size: 16px;
  font-weight: 500;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 200px 130px 130px;
  gap: 30px;
`;

export const SelectBox = styled.div`
  height: 45px;
  position: relative;
`;

export const CancelBtn = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.MainColor};
  color: ${({ theme }) => theme.colors.MainColor};
`;

export const ConfirmBtn = styled(Button)`
  background: ${({ theme }) => theme.colors.MainColor};
  color: white;
`;
