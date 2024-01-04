import React from "react";
import * as Component from "../../style/component/title/pagetitle.styled";
import Title from "../atom/pagetitle/Title";
import SubTitle from "../atom/pagetitle/SubTitle";
import ArrowIcon from "../atom/pagetitle/ArrowIcon";
interface TitleProps {
  children: React.ReactNode;
}

function PageTitle({ children }: TitleProps) {
  return <Component.FlexBox>{children}</Component.FlexBox>;
}

export default PageTitle;

PageTitle.Title = Title;
PageTitle.SubTitle = SubTitle;
PageTitle.ArrowIcon = ArrowIcon;
