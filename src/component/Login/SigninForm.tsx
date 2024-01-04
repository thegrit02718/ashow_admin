import React, { useState } from "react";
import Logo from "../../asset/images/login/toplogo.png";
import * as LoginCom from "../../style/login/Login.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SigninReqType } from "../../types/Signup";
import SiginupModal from "./SiginupModal";

interface SigininFormProps {
  errorMessage: string;
  handleSignup: (data: SigninReqType) => void;
}

const schema = yup.object().shape({
  id: yup
    .string()
    .min(3, "아이디는 최소 3자 이상 입력해주세요")
    .matches(/^[a-zA-Z0-9]*$/, "아이디는 영어와 숫자로만 구성되어야 합니다")
    .matches(/^(?!\d)/, "아이디는 숫자로 시작할 수 없습니다")
    .required("아이디를 입력해주세요"),
  pw: yup
    .string()
    .max(16, "비밀번호는 최대 16자리입니다!")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]*$/,
      "비밀번호는 알파벳과 숫자로만 구성되어야 합니다"
    )
    // .matches(regexPasswd, '비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요.')
    .required("비밀번호를 입력해주세요"),
});

function SigininForm({ errorMessage, handleSignup }: SigininFormProps) {
  const [isPopup, setIsPopup] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const toggle = () => {
    setIsPopup(!isPopup);
  };
  const onSubmit = (data: any) => {
    handleSignup(data);
  };
  return (
    <LoginCom.SiginFormWrapper>
      <LoginCom.Content>
        <LoginCom.LoginForm onSubmit={handleSubmit(onSubmit)}>
          <LoginCom.Logo src={Logo} alt="로고이미지" />
          <LoginCom.InputFieldContainer>
            <LoginCom.Input type="text" {...register("id")} />
            <LoginCom.Input type="password" {...register("pw")} />
            <LoginCom.ErrorMessage>
              {errors.id?.message || errors.pw?.message}
            </LoginCom.ErrorMessage>
            <LoginCom.SubmitButton
              type="button"
              onClick={handleSubmit(onSubmit)}
            >
              로그인
            </LoginCom.SubmitButton>
          </LoginCom.InputFieldContainer>
        </LoginCom.LoginForm>
        <LoginCom.BtnContainer>
          <LoginCom.PasstoSignupBtn onClick={() => setIsPopup(true)}>
            회원가입
          </LoginCom.PasstoSignupBtn>
        </LoginCom.BtnContainer>
      </LoginCom.Content>
      {isPopup && <SiginupModal toggle={toggle} />}
    </LoginCom.SiginFormWrapper>
  );
}

export default SigininForm;
