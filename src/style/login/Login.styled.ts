import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background: #fdfdfd;
  overflow-y: hidden;
`;

export const Logo = styled.img`
  width: 200px;
  height: 50px;
  object-fit: contain;
`;
export const SiginFormWrapper = styled.main``;
export const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -35%);
  max-width: 300px;
  width: 100%;
  height: fit-content;
`;
export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px 0;
  margin-top: 2rem;
  align-items: center;
`;

export const InputFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px 0;
  margin-top: 2rem;
`;

export const Input = styled.input`
  border: 1px solid #e5e5e5;
  padding: 8px 10px;
  border-radius: 5px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.red};
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  width: 100%;
  background: ${({ theme }) => theme.colors.red};

  border-radius: 5px;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 500;
  box-shadow: 1px 2px 6px 0px #ccc8c8;
  &:active {
    box-shadow: none;
  }
`;

export const BtnContainer = styled.div`
  margin-top: 10px;
`;
export const ErrorMessage = styled.p`
  height: 15px;
  font-size: 12px;
  text-align: center;
  margin: 5px 0;
  word-break: keep-all;
  color: #e8726e;
`;

export const PasstoSignupBtn = styled.button`
  font-weight: 500;
  font-size: 12px;
  color: #666666;
  padding: 0;
  &:hover {
    color: #b9b9b9;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const FooterInner = styled.div`
  flex-direction: row;
  height: 150px;
  padding: 20px 40px;
  background: #2b2b2b;
  display: flex;
  align-items: center;
  gap: 0 40px;
`;

export const FooterText = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: 300;
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`;
export const FooterLogo = styled.img`
  max-width: 200px;
  height: 50px;
  fit-content: contain;
`;
