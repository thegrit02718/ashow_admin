import React, { useReducer, useState } from "react";
import * as Admin from "../style/component/navmenu/navmenu.styled";
import Logo from "../asset/images/login/toplogo.png";
import { useNavigate } from "react-router-dom";
import { toggleProps } from "../pages/main/Home";
import NavUl from "./molecule/NavUl";
import HomeImage from "../asset/images/sidebar/home_icon.png";
import AptImage from "../asset/images/sidebar/apartment_icon.png";
import UserImage from "../asset/images/sidebar/user_icon.png";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <Admin.Sidebar>
      <Admin.LogoContainer>
        <Admin.Logo src={Logo} />
      </Admin.LogoContainer>
      <Admin.Container>
        <NavUl>
          <NavUl.Trigger onClick={() => navigate("/home")}>
            <Admin.Image src={HomeImage} />
            <Admin.LiText>MY 홈</Admin.LiText>
          </NavUl.Trigger>
        </NavUl>
        <NavUl>
          <NavUl.Trigger hasProps>
            <Admin.Image src={AptImage} />
            <Admin.LiText>매물 관리</Admin.LiText>
          </NavUl.Trigger>
          <NavUl.Dropdown>
            <NavUl.List event={() => navigate("/buildings")}>
              매물 목록
            </NavUl.List>
          </NavUl.Dropdown>
        </NavUl>
        <NavUl>
          <NavUl.Trigger hasProps>
            <Admin.Image src={UserImage} />
            <Admin.LiText>마이페이지</Admin.LiText>
          </NavUl.Trigger>
          <NavUl.Dropdown>
            <NavUl.List event={() => navigate("/account")}>내 정보</NavUl.List>
          </NavUl.Dropdown>
        </NavUl>
      </Admin.Container>
    </Admin.Sidebar>
  );
}

export default Sidebar;
