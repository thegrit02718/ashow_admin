import styled from "styled-components";

export const Container = styled.main`
  padding: 25px;
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Section = styled.div`
  min-height: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px 0;
`;
export const SelectBox = styled.div`
  width: 480px;
`;
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  background: ${({ theme }) => theme.colors.grey4};
  border-top: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
  margin-bottom: 20px;
  gap: 0 50px;
  margin-bottom: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchBtn = styled.button`
  padding: 6px 15px;
  min-width: 70px;
  color: ${({ theme }) => theme.colors.white};
  background: #95a7ad;
`;

export const InputField = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
  height: 30px;
  padding: 0 10px;
  border-right: none;

  &:focus {
    outline: none;
  }
`;
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
`;
export const ResultCount = styled.div`
  font-size: 15px;
  font-weight: 500;
  display: flex;
  gap: 0 5px;
`;
export const Accent = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.MainColor};
`;

export const ConfirmBtn = styled.button`
  border-radius: 3px;
  padding: 5px;
  background: ${({ theme }) => theme.colors.MainColor};
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
`;
