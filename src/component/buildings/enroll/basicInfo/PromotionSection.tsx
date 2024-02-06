import React, { useEffect } from "react";
import SectionTitle from "../../../molecule/SectionTitle";
import * as Component from "../../../../style/buildings/AptEnrollment.styled";
import InputField from "../../../molecule/InputField";
import { AddressModalProps } from "../../../../types/Modal";
import { useRecoilState } from "recoil";
import { modalsState } from "../../../../recoil/stateModal";
import { NaverMap } from "./NaverMap";
import { RecoilProps } from "../../../../types/Modal";
import { AdrressState } from "../../../../recoil/stateProduct";
import { useSetRecoilState } from "recoil";
import { checkPromotionInfo } from "../../../../util/dataValidation";
import { promotionState } from "../../../../recoil/stateSection";
import useDebounce from "../../../../hooks/useDebounce";
import { aptBasicInfoState } from "../../../../recoil/stateProduct";

function PromotionSection() {
  const [state, setState] = useRecoilState(aptBasicInfoState);

  const [modalState, setModalState] = useRecoilState(modalsState);

  const { promotionSite } = state; // 홍보관 주소

  //모달 팝업
  const SearchEventHandler = () => {
    setModalState({
      isOpen: true,
      modalType: "AddressSearch",
      props: {
        type: "promotionSite",
      },
    });
  };
  const setValue = useSetRecoilState(promotionState);

  // 디바운스된 함수를 활용해서 컴포넌트 내부의 Input Field 값이 들어있는지 파악
  const debouncedCheckState = useDebounce({
    value: checkPromotionInfo(state),
    delay: 300,
  });

  // input field에 모든 값이 들어간 경우 리코일에 boolean 값 저장
  useEffect(() => {
    if (debouncedCheckState) {
      setValue(true);
    } else {
      setValue(false);
    }
  }, [debouncedCheckState]);

  return (
    <div>
      <SectionTitle>
        <SectionTitle.Container>
          <SectionTitle.Title>홍보관정보</SectionTitle.Title>
          <Component.InfoIcon />
        </SectionTitle.Container>
      </SectionTitle>
      <div>
        <Component.Grid $row="1fr 1fr">
          <Component.FlexColumn>
            <InputField state={state} setState={setState} type="promotionPhone">
              <InputField.Title>홍보관 대표번호</InputField.Title>
              <InputField.InputBox>
                <InputField.Input inputType="number" />
              </InputField.InputBox>
            </InputField>
            <InputField state={state} setState={setState} type="promotionRest">
              <InputField.Container>
                <InputField.Title>주소</InputField.Title>
                <InputField.SubTitle>
                  건물명 또는 주소(동/면/읍)을 입력한 후, 등록을 원하는 정확한
                  주소를 선택해 주세요.
                </InputField.SubTitle>
              </InputField.Container>
              <Component.Container>
                <InputField.Container align="center">
                  <InputField.InputBox disabled={promotionSite ? false : true}>
                    {promotionSite ? promotionSite : ""}
                  </InputField.InputBox>
                  <InputField.Button event={SearchEventHandler}>
                    주소찾기
                  </InputField.Button>
                </InputField.Container>
                <InputField.InputBox disabled={promotionSite ? false : true}>
                  <InputField.Input disabled={promotionSite ? false : true} />
                </InputField.InputBox>
              </Component.Container>
              <Component.Message>
                ※ 입력된 주소가 실제 위치와 다르게 입력되면, 검수 시 반려될 수
                있습니다.
              </Component.Message>
            </InputField>
          </Component.FlexColumn>
          <NaverMap id="map2" type="promotionSite" />
        </Component.Grid>
      </div>
    </div>
  );
}

export default PromotionSection;
