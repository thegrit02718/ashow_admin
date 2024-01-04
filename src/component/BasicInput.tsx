import React, { ChangeEvent, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textalign?: string;
  type: string;
  event: (e: ChangeEvent<HTMLInputElement>) => void;
}

function BasicInput({ textalign, type, event, ...props }: InputProps) {
  return (
    <Input
      type={type}
      onChange={event}
      accept={type === "file" ? "image/*" : ""}
      $textalign={textalign}
      {...props}
    />
  );
}

export default BasicInput;

export const Input = styled.input<{ $textalign?: string }>`
  text-align: ${(props) => props.$textalign ?? "flex-start"};
`;
