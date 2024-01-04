import React, { useReducer } from "react";
import ModalLayout from "./ModalLayout";
import * as Modal from "../../style/modal/FacilityRefModal.styeld";
import { Select } from "../molecule/Select";
import { reducer, initialState } from "../../reducer/FacilityInfoReducer";
import InputField from "../molecule/InputField";
import { useRecoilState, useResetRecoilState } from "recoil";
import { modalsState } from "../../recoil/stateModal";
import { facilityState } from "../../recoil/stateProduct";
import { FacilState } from "../../reducer/FacilityInfoReducer";

function FacilityRegModal() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [modalState, setModalState] = useRecoilState(facilityState);
  const reset = useResetRecoilState(modalsState);
  // Recoil Callback을 사용하여 리렌더링 없이 reset 호출

  const submitHandler = () => {
    setModalState((prev: any) => ({
      ...prev,
      total: {
        facilityType: state.facilityType,
        block: state.block,
        floor: state.floor,
        facilityName: state.facilityName,
        description: state.description,
      },
    }));
    reset();
  };
  return (
    <ModalLayout width={930} title="커뮤니티 시설 등록">
      <Modal.ContentInner>
        <Modal.Container>
          <Modal.TitleBox>
            <Modal.Title>시설정보</Modal.Title>
            <Modal.Accent>*</Modal.Accent>
          </Modal.TitleBox>
          <Modal.ContentBox>
            <Modal.SelectBox>
              <Select
                defaultValue="구분"
                dispatch={dispatch}
                type="UPDATE_FACILITYTYPE"
              >
                <Select.Trigger />
                <Select.List>
                  <Select.Option value="운동 시설" />
                  <Select.Option value="편의 시설" />
                  <Select.Option value="유아 시설" />
                </Select.List>
              </Select>
            </Modal.SelectBox>

            <InputField actionType="UPDATE_BLOCK" dispatch={dispatch}>
              <InputField.InputBox>
                <InputField.Input />
                <InputField.Unit>동</InputField.Unit>
              </InputField.InputBox>
            </InputField>
            <InputField actionType="UPDATE_FLOOR" dispatch={dispatch}>
              <InputField.InputBox>
                <InputField.Input />
                <InputField.Unit>층</InputField.Unit>
              </InputField.InputBox>
            </InputField>
            <InputField actionType="UPDATE_FAICILITYNAME" dispatch={dispatch}>
              <InputField.InputBox>
                <InputField.Input placeholder="커뮤니티 시설명" />
              </InputField.InputBox>
            </InputField>
          </Modal.ContentBox>
        </Modal.Container>
        <Modal.Container>
          <Modal.TitleBox>
            <Modal.Title>시설에 대한 간단 설명</Modal.Title>
          </Modal.TitleBox>
          <Modal.Textarea
            spellCheck={false}
            placeholder={
              "해당 커뮤니티 시설에 대한 간단한 설명을 입력해 주세요. \n예시) 입주민들이 이용하는 쾌적한 분위기의 커뮤니티 공간"
            }
            onChange={(e) =>
              dispatch({
                type: "UPDATE_DESCRIPTION",
                payload: e.target.value,
              })
            }
          ></Modal.Textarea>
        </Modal.Container>
      </Modal.ContentInner>

      <Modal.BtnContainer>
        <Modal.CancelBtn onClick={() => reset()}>취소</Modal.CancelBtn>
        <Modal.ConfirmBtn onClick={() => submitHandler()}>
          저장
        </Modal.ConfirmBtn>
      </Modal.BtnContainer>
    </ModalLayout>
  );
}

export default FacilityRegModal;
