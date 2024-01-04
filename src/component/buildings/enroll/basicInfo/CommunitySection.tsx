import React, { useEffect } from "react";
import { State } from "../../../../reducer/aptBasicInfoReducer";
import { Action } from "../../../../types/Reducer";
import * as Tab from "../../../../style/component/tab/Tabs.styled";
import Tabs from "../../../molecule/Tabs";
import EnrollImagePanel from "./EnrollImagePanel";
import SectionTitle from "../../../molecule/SectionTitle";
import { ComponentProps } from "../../../../types/types";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalsState } from "../../../../recoil/stateModal";
import { reducer } from "../../../../reducer/FacilityInfoReducer";
import { initialState } from "../../../../reducer/FacilityInfoReducer";
import { facilityState } from "../../../../recoil/stateProduct";
import { FacilState } from "../../../../reducer/FacilityInfoReducer";

function CommunitySection({ state, dispatch }: ComponentProps) {
  const [modalState, setModalState] = useRecoilState(modalsState);
  const { total } = useRecoilValue(facilityState);
  const community: FacilState[] = state.communityFacilities;
  const modalEventHandler = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: true,
      modalType: "FacilityReg",
      props: {},
    }));
  };
  useEffect(() => {
    console.log(typeof total);
    if (Object.keys(total).length > 0) {
      dispatch({ type: "UPDATE_COMMUNITY_FACILITY", payload: total });
    }
  }, [total]);
  const category = "communityFacilities";
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

      <Tabs defaultValue={1}>
        <Tabs.Panel value={1}>
          <EnrollImagePanel
            dispatch={dispatch}
            state={state}
            category={category}
          />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default CommunitySection;
