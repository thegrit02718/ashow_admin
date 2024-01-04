import React, { useState, useReducer, useEffect } from "react";
import { State } from "../../../../reducer/aptBasicInfoReducer";
import * as Component from "../../../../style/buildings/AptEnrollment.styled";
import { Select } from "../../../molecule/Select";
import InputField from "../../../molecule/InputField";
import CalendarComponent from "../../CalendarComponent";
import { NaverMap } from "./NaverMap";
import SectionTitle from "../../../molecule/SectionTitle";
import { useRecoilState } from "recoil";
import { modalsState } from "../../../../recoil/stateModal";
import dayjs from "dayjs";
import { Action } from "../../../../types/Reducer";
import "../../../../style/buildings/calendar.css";
import { ModalStateProps } from "../../../../types/Modal";
import { RecoilProps } from "../../../../types/Modal";
import { AdrressState } from "../../../../recoil/stateProduct";

interface ProductInfoForm {
  state: State;
  dispatch: React.Dispatch<Action>;
}

function ProductInfoForm({ state, dispatch }: ProductInfoForm) {
  const [modalState, setModalState] = useRecoilState(modalsState);
  const [adrressState, setAdrressState] =
    useRecoilState<ModalStateProps<RecoilProps>>(AdrressState);
  const address = adrressState.address.address;
  const [isPopup, setIsPopup] = useState(false);

  // 리코일에서 주소 api로 등록한 주소가져오기
  useEffect(() => {
    dispatch({
      type: "UPDATE_ADDRESS",
      payload: address,
    });
  }, [address]);

  // 주소검색 버튼 클릭 시 주소 api모달창 팝업
  const SearchEventHandler = () => {
    setModalState({
      isOpen: true,
      modalType: "AddressSearch",
      props: {
        type: "address",
      },
    });
  };
  // 캘린더를 보여줄 모달창 팝업
  const onChangeHandler = (value: Date) => {
    const date = dayjs(value).format("YYYY.MM");
    setIsPopup(!isPopup);
    dispatch({ type: "UPDATE_INDATE", payload: date });
  };

  const parkingPerUnit = (houseHoldSum: number, parkingAll: number) => {
    if (houseHoldSum == 0 || parkingAll == 0) return "0.00";
    return (houseHoldSum / parkingAll).toFixed(2);
  };

  return (
    <div>
      <SectionTitle>
        <SectionTitle.Title>상품 기본 정보</SectionTitle.Title>
      </SectionTitle>
      <Component.FlexColumn>
        <Component.Grid $row="1fr 1fr">
          <Component.FlexColumn>
            <InputField actionType="UPDATE_BUILDING_NAME" dispatch={dispatch}>
              <InputField.Title>아파트명</InputField.Title>
              <InputField.InputBox>
                <InputField.Input />
              </InputField.InputBox>
            </InputField>
            <InputField actionType="UPDATE_LAST_ADDRESS" dispatch={dispatch}>
              <InputField.Container>
                <InputField.Title>주소</InputField.Title>
                <InputField.SubTitle>
                  건물명 또는 주소(동/면/읍)을 입력한 후, 등록을 원하는 정확한
                  주소를 선택해 주세요.
                </InputField.SubTitle>
              </InputField.Container>
              <Component.Container>
                <InputField.Container align="center">
                  <InputField.InputBox disabled={address ? false : true}>
                    {address ? address : ""}
                  </InputField.InputBox>
                  <InputField.Button event={SearchEventHandler}>
                    주소찾기
                  </InputField.Button>
                </InputField.Container>
                <InputField.InputBox disabled={address ? false : true}>
                  <InputField.Input disabled={address ? false : true} />
                </InputField.InputBox>
              </Component.Container>
              <Component.Message>
                ※ 입력된 주소가 실제 위치와 다르게 입력되면, 검수 시 반려될 수
                있습니다.
              </Component.Message>
            </InputField>
          </Component.FlexColumn>

          <NaverMap id="map" type="address" />
        </Component.Grid>
        <Component.Grid $row="1fr 1fr 1fr">
          <InputField actionType="UPDATE_INDATE" dispatch={dispatch}>
            <InputField.Title>입주 시기</InputField.Title>
            <InputField.InputBox>
              <Component.CalendarIconBox>
                <Component.CalendarIcon onClick={() => setIsPopup(!isPopup)} />
                {isPopup && <CalendarComponent onChange={onChangeHandler} />}
              </Component.CalendarIconBox>
              <InputField.Input
                value={state.inDate}
                placeholder="YYYY/MM"
                disabled={true}
              />
            </InputField.InputBox>
          </InputField>
          <InputField actionType="UPDATE_HOUSEHOLDSUM" dispatch={dispatch}>
            <InputField.Title>세대 수</InputField.Title>
            <InputField.InputBox>
              <InputField.Input />
              <InputField.Unit>세대</InputField.Unit>
            </InputField.InputBox>
          </InputField>
          <InputField actionType="UPDATE_BUILDINGSNUM" dispatch={dispatch}>
            <InputField.Title>동 수</InputField.Title>
            <InputField.InputBox>
              <InputField.Input />
              <InputField.Unit>개</InputField.Unit>
            </InputField.InputBox>
          </InputField>
        </Component.Grid>
        <Component.Grid $row="1fr 1fr">
          <InputField actionType="UPDATE_AREARATIO" dispatch={dispatch}>
            <InputField.Title>용적률</InputField.Title>
            <InputField.InputBox>
              <InputField.Input />
              <InputField.Unit>%</InputField.Unit>
            </InputField.InputBox>
          </InputField>
          <InputField actionType="UPDATE_COVERRATIO" dispatch={dispatch}>
            <InputField.Title>건폐율</InputField.Title>
            <InputField.InputBox>
              <InputField.Input />
              <InputField.Unit>%</InputField.Unit>
            </InputField.InputBox>
          </InputField>
        </Component.Grid>
        <Component.Grid $row="1fr 1fr">
          <InputField actionType="UPDATE_LOWFLOOR" dispatch={dispatch}>
            <InputField.Title>최저/고층</InputField.Title>
            <InputField.InputBox>
              <InputField.Unit>가장 낮은 동</InputField.Unit>
              <InputField.Input />
              <InputField.Unit>층</InputField.Unit>
            </InputField.InputBox>
          </InputField>
          <InputField actionType="UPDATE_HIGHFLOOR" dispatch={dispatch}>
            <InputField.InputBox>
              <InputField.Unit>가장 높은 동</InputField.Unit>
              <InputField.Input />
              <InputField.Unit>층</InputField.Unit>
            </InputField.InputBox>
          </InputField>
        </Component.Grid>
        <Component.Grid $row="1fr 1fr">
          <InputField actionType="UPDATE_CONSTRUCTOR" dispatch={dispatch}>
            <InputField.Title>시공사</InputField.Title>
            <InputField.InputBox>
              <InputField.Input />
            </InputField.InputBox>
          </InputField>
          <InputField actionType="UPDATE_DEVELOPER" dispatch={dispatch}>
            <InputField.Title>시행사</InputField.Title>
            <InputField.InputBox>
              <InputField.Input />
            </InputField.InputBox>
          </InputField>
        </Component.Grid>
        <Component.Grid $row="1fr 1fr">
          <InputField actionType="UPDATE_DOORSTRUCTURE" dispatch={dispatch}>
            <InputField.Title>현관구조</InputField.Title>
            <Select
              defaultValue="선택하세요"
              dispatch={dispatch}
              type="UPDATE_DOORSTRUCTURE"
            >
              <Component.FlexBox direction="row">
                <Select.Input />
                <Select.Container>
                  <Select.Trigger />
                  <Select.List>
                    <Select.Option value="계단식" />
                    <Select.Option value="복도식" />
                    <Select.Option value="직접입력" />
                  </Select.List>
                </Select.Container>
              </Component.FlexBox>
            </Select>
          </InputField>
          <InputField actionType="UPDATE_DEVELOPER" dispatch={dispatch}>
            <InputField.Title>난방</InputField.Title>
            <Select
              defaultValue="선택하세요"
              dispatch={dispatch}
              type="UPDATE_HEATING"
            >
              <Component.FlexBox direction="row">
                <Select.Input />
                <Select.Container>
                  <Select.Trigger />
                  <Select.List>
                    <Select.Option value="개별난방(도시가스)" />
                    <Select.Option value="지역난방(열병합)" />
                    <Select.Option value="중앙난방" />
                    <Select.Option value="직접입력" />
                  </Select.List>
                </Select.Container>
              </Component.FlexBox>
            </Select>
          </InputField>
        </Component.Grid>
        <Component.Grid $row="1fr 1fr">
          <InputField actionType="UPDATE_PARKINGFORM" dispatch={dispatch}>
            <InputField.Title>주차장 형태</InputField.Title>
            <Component.FlexRow>
              <InputField.Radio defaultChecked name="parking" id={1}>
                지상 주차장
              </InputField.Radio>
              <InputField.Radio name="parking" id={2}>
                지하 주차장
              </InputField.Radio>
              <InputField.Radio name="parking" id={3}>
                지상·지하 주차장
              </InputField.Radio>
            </Component.FlexRow>
          </InputField>
          <InputField actionType="UPDATE_PARKINGALL" dispatch={dispatch}>
            <InputField.Title>총 주차 대수</InputField.Title>
            <InputField.Container>
              <Component.FlexRow>
                <InputField.InputBox>
                  <InputField.Input />
                  <InputField.Unit>대</InputField.Unit>
                </InputField.InputBox>
                <Component.UnitContainer>
                  <p>세대당 주차 대수</p>
                  <Component.FlexBox direction="row">
                    <Component.Accent>
                      {parkingPerUnit(state.houseHoldSum, state.parkingAll)}
                    </Component.Accent>
                    대
                  </Component.FlexBox>
                </Component.UnitContainer>
              </Component.FlexRow>
            </InputField.Container>
          </InputField>
        </Component.Grid>
      </Component.FlexColumn>
    </div>
  );
}

export default ProductInfoForm;
