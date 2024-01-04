import React from "react";
import { useContext } from "react";
import { InputContext } from "../../molecule/InputField";
import * as Component from "../../../style/component/inputfiled/InputFiled.styled";

interface RadioboxProps {
  name: string | number;
  id?: string | number;
  defaultChecked?: boolean;
  children: React.ReactNode;
}

function RadioBox({ name, id = 1, defaultChecked, children }: RadioboxProps) {
  const context = useContext(InputContext);
  if (context) {
    const { actionType, dispatch } = context;
    return (
      <Component.Label htmlFor={String(id)}>
        <Component.Radio
          type="radio"
          name={String(name)}
          defaultChecked={defaultChecked}
          id={String(id)}
          onChange={(e) =>
            dispatch({ type: actionType, payload: e.target.value })
          }
        />
        <span className="on"></span>
        <p>{children}</p>
      </Component.Label>
    );
  }
  return null;
}

export default RadioBox;
