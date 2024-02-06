import React, { useEffect } from "react";
import Tabs from "../../../molecule/Tabs";
import SectionTitle from "../../../molecule/SectionTitle";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalsState } from "../../../../recoil/stateModal";
import { facilityState } from "../../../../recoil/stateProduct";
import { useSetRecoilState } from "recoil";
import { checkCommunityInfo } from "../../../../util/dataValidation";
import { communityState } from "../../../../recoil/stateSection";
import useDebounce from "../../../../hooks/useDebounce";
import { aptBasicInfoState } from "../../../../recoil/stateProduct";

function CommunitySection() {
  const [state, setState] = useRecoilState(aptBasicInfoState);
  const [modalState, setModalState] = useRecoilState(modalsState);
  const facilityList = useRecoilValue(facilityState);
  const setValue = useSetRecoilState(communityState);

  // 디바운스된 함수를 활용해서 컴포넌트 내부의 Input Field 값이 들어있는지 파악
  const debouncedCheckState = useDebounce({
    value: checkCommunityInfo(state),
    delay: 300,
  });

  //모달팝업
  const modalEventHandler = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: true,
      modalType: "FacilityReg",
      props: {},
    }));
  };

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
          <SectionTitle.Title>커뮤니티 시설</SectionTitle.Title>
          <SectionTitle.SubTitle>
            단지 내 커뮤니티 시설을 등록해 주세요.
          </SectionTitle.SubTitle>
        </SectionTitle.Container>
        <SectionTitle.Button onClick={modalEventHandler}>
          + 추가
        </SectionTitle.Button>
      </SectionTitle>

      <Tabs setState={setState} state={state}>
        <Tabs.Panel value={1}>
          <Tabs.ImagePanel category="communityFacilities" />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default CommunitySection;
