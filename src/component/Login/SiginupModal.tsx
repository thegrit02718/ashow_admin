import React from "react";
import * as Signup from "../../style/login/Siginup.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface SiginupModalProps {
  toggle: () => void;
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
    .required("비밀번호를 입력해주세요"),
  checkPw: yup.string().oneOf([yup.ref("pw")], "비밀번호가 다릅니다."),
});

function SiginupModal({ toggle }: SiginupModalProps) {
  const onSubmit = () => {};
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  return (
    <Signup.Wrapper>
      <Signup.Curtain onClick={toggle} />
      <Signup.SignupModal>
        <Signup.SignupInner>
          <Signup.TitleContainer>
            <Signup.Title>ASHOW SIGNUP</Signup.Title>
            <Signup.SubTitle>
              아쇼에 회원가입하셔서 매물을 등록하시고 득도하세요
            </Signup.SubTitle>
          </Signup.TitleContainer>
          <Signup.SignupForm onSubmit={handleSubmit(onSubmit)}>
            <Signup.FormInner>
              <Signup.Container>
                <Signup.FlexBox>
                  <Signup.ContentTitle>아이디</Signup.ContentTitle>
                  <Signup.AccentText>*</Signup.AccentText>
                </Signup.FlexBox>
                <Signup.Input
                  type="text"
                  placeholder="아이디를 입력해주세요."
                  {...register("id")}
                />
              </Signup.Container>
              <Signup.Container>
                <Signup.FlexBox>
                  <Signup.ContentTitle>비밀번호</Signup.ContentTitle>
                  <Signup.AccentText>*</Signup.AccentText>
                </Signup.FlexBox>
                <Signup.Input
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  {...register("pw")}
                />
                <Signup.Input
                  type="password"
                  placeholder="비밀번호 확인"
                  {...register("checkPw")}
                />
              </Signup.Container>
            </Signup.FormInner>
            <Signup.ErrorMessage>
              {errors.id?.message ||
                errors.pw?.message ||
                errors.checkPw?.message}
            </Signup.ErrorMessage>
            <Signup.ButtonContainer>
              <Signup.Button
                type="button"
                color="#a1a072"
                onClick={handleSubmit(onSubmit)}
              >
                회원가입
              </Signup.Button>
              <Signup.Button type="button" color="#1e1e1e" onClick={toggle}>
                닫기
              </Signup.Button>
            </Signup.ButtonContainer>
          </Signup.SignupForm>
        </Signup.SignupInner>
      </Signup.SignupModal>
    </Signup.Wrapper>
  );
}

export default SiginupModal;
