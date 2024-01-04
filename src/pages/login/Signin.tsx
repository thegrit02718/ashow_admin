import * as LoginCom from "../../style/login/Login.styled";
import React, { useState } from "react";
import SigninForm from "../../component/Login/SigninForm";
import Footer from "../../component/Login/Footer";
import { SigninReqType } from "../../types/Signup";
import { instance } from "../../api/baseApi";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (data: SigninReqType) => {
    try {
      const response = await instance.post("/users/signUp", {
        id: data.id,
        password: data.password,
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <LoginCom.Wrapper>
      <SigninForm errorMessage={errorMessage} handleSignup={handleSignup} />
      <Footer />
    </LoginCom.Wrapper>
  );
}

export default Login;
