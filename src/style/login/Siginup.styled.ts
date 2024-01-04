import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
`;
export const Curtain = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    top: 55%;
  }
  to {
    opacity: 1;
    top:50%;
  }
`;

export const SignupModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 100%;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const SignupInner = styled.div`
  height: 60vh;
  padding: 40px 50px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 4px 6px -1px #949494;
  display: flex;
  flex-direction: column;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const FormInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px 0;
  margin-top: 2rem;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  width: 100%;
`;
export const Title = styled.h2`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 34px;
  font-weight: 600;
  text-align: center;
  letter-spacing: -0.8px;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px 0;
  max-width: 300px;
  margin: 0 auto;
`;
export const SubTitle = styled.p`
  word-break: keep-all;
  text-align: center;
  line-height: 20px;
`;
export const ContentTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  font-weight: 600;
`;
export const FlexBox = styled.div`
  display: flex;
`;
export const AccentText = styled.p`
  color: #f17736;
`;
export const Input = styled.input`
  padding: 12px 13px;
  border: none;
  background: #eeeeee;
  border-radius: 2px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: grey;
    font-size: 11px;
    font-weight: 600;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 20px;
  justify-content: center;
`;

export const Button = styled.button`
  width: 150px;
  padding: 10px 20px;
  background: ${(props) => props.color};
  color: #fff;
  font-size: 13px;
`;

export const ErrorMessage = styled.p`
  height: 15px;
  font-size: 12px;
  text-align: center;
  margin: 5px 0;
  word-break: keep-all;
  color: #e8726e;
`;
