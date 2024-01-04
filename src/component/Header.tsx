import React from "react";
import * as Admin from "../style/main/Home.styled";

function Header() {
  return (
    <Admin.Header>
      <Admin.UtilContainer>
        <Admin.IconBox>
          <Admin.BellIcon />
          <Admin.InfoIcon />
        </Admin.IconBox>
        <Admin.UserInfo>
          <Admin.UserName>사업자명</Admin.UserName>
          <Admin.ArrowBottom />
        </Admin.UserInfo>
      </Admin.UtilContainer>
    </Admin.Header>
  );
}

export default Header;
