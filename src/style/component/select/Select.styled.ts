import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 50%;
`;

export const Ul = styled.ul<{ $visible: string }>`
  position: absolute;
  top: 47px;
  left: 0;
  background: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.WhiteBorder};
  width: 100%;
  box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.$visible === "true" ? "block" : "none")};
`;

export const Input = styled.input<{ $direct: string }>`
  background: ${({ $direct, theme }) =>
    $direct === "true" ? theme.colors.grey1 : "#fff"};
  color: ${({ theme }) => theme.colors.black};
  padding: 12px 16px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  width: 50%;
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.1);
  font-family: "Wanted Sans Variable", "Wanted Sans", -apple-system,
    BlinkMacSystemFont, system-ui, "Segoe UI", "Apple SD Gothic Neo",
    "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", sans-serif;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey5};
  }
`;
