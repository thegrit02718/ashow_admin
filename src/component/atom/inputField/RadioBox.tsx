import React, { useEffect } from "react";
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
  useEffect(() => {
    if (context && defaultChecked) {
      context.setState((prev: any) => ({
        ...prev,
        [context.type as string]: children,
      }));
    }
  }, []);
  if (context) {
    const { state, setState, type } = context;
    return (
      <Component.Label htmlFor={String(id)}>
        <Component.Radio
          type="radio"
          name={String(name)}
          defaultChecked={defaultChecked}
          id={String(id)}
          onChange={(e) =>
            setState((prev: any) => ({
              ...prev,
              [type as string]: children,
            }))
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
