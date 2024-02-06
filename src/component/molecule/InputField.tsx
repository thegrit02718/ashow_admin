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

interface InputFieldProps<T> extends InputContext<T> {
  children: React.ReactNode;
}
type SetterOrUpdater<T> = (value: T | ((currVal: T) => T)) => void;

interface InputContext<T> {
  state: T;
  setState: SetterOrUpdater<T>;
  type?: keyof T;
}
export const InputContext = createContext<InputContext<any> | null>(null);

function InputField<T>({
  state,
  setState,
  type,
  children,
}: InputFieldProps<T>) {
  const providerValue: InputContext<T> = { setState, state, type };
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
