import React, { useReducer, useState } from "react";
import * as Admin from "../style/component/navmenu/navmenu.styled";
import Logo from "../asset/images/login/toplogo.png";
import { useNavigate } from "react-router-dom";
import { toggleProps } from "../pages/main/Home";
import NavUl from "./molecule/NavUl";
import { useToggle } from "../hooks/useToggle";

function AdminSidebar() {
  const navigate = useNavigate();
  const { state, toggle } = useToggle();
  return (
    <Admin.Sidebar>
      <Admin.LogoContainer>
        <Admin.Logo src={Logo} />
      </Admin.LogoContainer>
      {/*  <Admin.UserName>관리자님, 반갑습니다</Admin.UserName> */}
      <Admin.Container>
        <NavUl>
          <NavUl.Trigger onClick={() => navigate("/admin")}>
            <Admin.HomeIcon />
            <Admin.LiText>홈</Admin.LiText>
          </NavUl.Trigger>
        </NavUl>
        <NavUl>
          <NavUl.Trigger hasProps>
            <Admin.UserIcon />
            <Admin.LiText>사용자관리</Admin.LiText>
          </NavUl.Trigger>
          <NavUl.Dropdown>
            <NavUl.List event={() => navigate("/user")}>사용자 목록</NavUl.List>
            <NavUl.List event={() => navigate("/request")}>
              매물 심사 요청
            </NavUl.List>
          </NavUl.Dropdown>
        </NavUl>
        <NavUl>
          <NavUl.Trigger hasProps>
            <Admin.PostIcon />
            <Admin.LiText>게시물 관리</Admin.LiText>
          </NavUl.Trigger>
          <NavUl.Dropdown>
            <NavUl.List event={() => navigate("/post")}>
              게시판 리스트
            </NavUl.List>
          </NavUl.Dropdown>
        </NavUl>
      </Admin.Container>
    </Admin.Sidebar>
  );
}

export default AdminSidebar;
