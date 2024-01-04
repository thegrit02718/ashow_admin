import React from "react";
import * as Component from "../../../style/component/title/pagetitle.styled";
import ArrowIcon from "./ArrowIcon";

interface SubTitleProps {
  data: string[];
}

function SubTitle({ data }: SubTitleProps) {
  return (
    <Component.SubTitleBox>
      {data.map((item, idx) => {
        return (
          <React.Fragment key={idx}>
            <Component.SubTitle>{item}</Component.SubTitle>
            {data.length !== idx + 1 && <ArrowIcon />}
          </React.Fragment>
        );
      })}
    </Component.SubTitleBox>
  );
}

export default SubTitle;
