import * as Enroll from "../../style/buildings/AptEnrollment.styled";
import React from "react";
import { Action } from "../../types/Reducer";

interface Props {
  title: string;
  type: string;
  dispatch: React.Dispatch<Action>;
  inputType?: string;
  unit?: React.ReactNode;
  textalign?: "right" | "center" | "left";
}

function InputField(props: Props) {
  const {
    title,
    type,
    dispatch,
    inputType,
    unit,
    textalign = "center",
  } = props;
  return (
    <Enroll.FlexBox>
      <Enroll.Title>{title}</Enroll.Title>
      <Enroll.InputBox>
        <Enroll.TextInput
          $textalign={textalign}
          type={inputType == "number" ? "number" : "text"}
          onChange={(e) =>
            dispatch({
              type,
              payload: e.target.value,
            })
          }
        />
        {unit}
      </Enroll.InputBox>
    </Enroll.FlexBox>
  );
}

export default InputField;
