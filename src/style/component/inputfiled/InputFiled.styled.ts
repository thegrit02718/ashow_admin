import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0;
`;

export const Container = styled.div<{ $align: string }>`
  display: flex;
  align-items: ${(props) => props.$align};
  gap: 0 8px;
`;

export const Title = styled.p`
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

export const InputBox = styled.div<{ $isvalue: boolean }>`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  gap: 0 8px;
  align-items: center;
  background: ${(props) => (props.$isvalue ? props.theme.colors.grey : "#fff")};
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 4px;
  height: 45px;
  font-size: 14px;
`;

export const Input = styled.input<{ align: string }>`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  text-align: ${(props) => props.align};
  background: #fff;
  font-size: 15px;
  border: none;
  background: transparent;
  font-family: "Wanted Sans Variable", "Wanted Sans", -apple-system,
    BlinkMacSystemFont, system-ui, "Segoe UI", "Apple SD Gothic Neo",
    "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", sans-serif;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 16px;
    color: #8795a9;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  min-width: fit-content;
  background: ${({ theme }) => theme.colors.MainColor};
  height: 45px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  padding: 14px 16px;
  letter-spacing: -0.01em;
  border-radius: 4px;
  letter-spacing: 0.2px;
`;

export const Unit = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
  min-width: fit-content;
`;

export const Label = styled.label`
  display: flex;
  gap: 0 8px;
  align-items: center;
  height: 45px;
  cursor: pointer;
`;

export const Radio = styled.input`
  margin: 0;
  appearance: none;

  & ~ p {
    color: #77818f;
    font-size: 14px;
    font-weight: 500;
  }

  &:checked ~ p {
    color: ${({ theme }) => theme.colors.black2};
  }

  & + .on {
    border-radius: 100%;
    border: 1px solid ${({ theme }) => theme.colors.grey2};
    width: 16px;
    height: 16px;
    position: relative;
  }

  &:checked + .on:after {
    content: "";
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.MainColor};
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
