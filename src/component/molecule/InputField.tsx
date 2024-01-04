import React from "react";
import { Action } from "../../types/Reducer";
import * as Component from "../../style/component/inputfiled/InputFiled.styled";
import { createContext } from "react";
import Container from "../atom/inputField/Container";
import Title from "../atom/inputField/Title";
import SubTitle from "../atom/inputField/SubTitle";
import InputBox from "../atom/inputField/InputBox";
import Input from "../atom/inputField/Input";
import Button from "../atom/inputField/Button";
import Unit from "../atom/inputField/Unit";
import RadioBox from "../atom/inputField/RadioBox";

interface InputFieldProps extends InputContext {
  children: React.ReactNode;
}

interface InputContext {
  actionType: string;
  dispatch: React.Dispatch<Action>;
}
export const InputContext = createContext<InputContext | null>(null);

function InputField({ actionType, dispatch, children }: InputFieldProps) {
  const providerValue: InputContext = {
    actionType,
    dispatch,
  };
  return (
    <InputContext.Provider value={providerValue}>
      <Component.Wrapper>{children}</Component.Wrapper>
    </InputContext.Provider>
  );
}

export default InputField;

InputField.Container = Container;
InputField.Title = Title;
InputField.SubTitle = SubTitle;
InputField.InputBox = InputBox;
InputField.Input = Input;
InputField.Button = Button;
InputField.Unit = Unit;
InputField.Radio = RadioBox;
