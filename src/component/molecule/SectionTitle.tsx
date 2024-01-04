import React from "react";
import * as Component from "../../style/component/title/sectiontitle.styled";
import Title from "../atom/sectiontitle/Title";
import SubTitle from "../atom/sectiontitle/Subtitle";
import Container from "../atom/sectiontitle/Container";
import Button from "../atom/sectiontitle/Button";

interface SectionTitleProps {
  children: React.ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
  return <Component.Wrapper>{children}</Component.Wrapper>;
}

export default SectionTitle;

SectionTitle.Title = Title;
SectionTitle.SubTitle = SubTitle;
SectionTitle.Container = Container;
SectionTitle.Button = Button;
