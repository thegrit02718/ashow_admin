import FooterLogo from "../../asset/images/login/footerlogo.png";
import * as LoginCom from "../../style/login/Login.styled";

function Footer() {
  return (
    <LoginCom.Footer>
      <LoginCom.FooterInner>
        <LoginCom.FooterLogo src={FooterLogo} alt="푸터 로고" />
        <LoginCom.Address>
          <LoginCom.FooterText>대표자: 곽동휴 </LoginCom.FooterText>
          <LoginCom.FooterText>
            주소 : 대구 수성구 청수로26길 46, 1004호(두산동, 엔플레이스){" "}
          </LoginCom.FooterText>
          <LoginCom.FooterText>
            Copyright © GEORIM Inc. All Rights Reserved.
          </LoginCom.FooterText>
        </LoginCom.Address>
      </LoginCom.FooterInner>
    </LoginCom.Footer>
  );
}

export default Footer;
