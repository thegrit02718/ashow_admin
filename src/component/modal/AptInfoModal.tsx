import React, { useReducer } from "react";

import ModalLayout from "./ModalLayout";
import { useRecoilState } from "recoil";
import { modalsState } from "../../recoil/stateModal";
import { AptState } from "../../recoil/stateProduct";
import * as Modal from "../../style/modal/AptInfoModal.styled";
import { dispatchAction } from "../../util/dispatchAction";
import { initialState, reducer } from "../../reducer/aptPyeongInfoReducer";

interface ModalsState {
  isOpen: boolean;
  modalType: string;
  props: Record<string, any>;
}

function AptInfoModal({ ...props }) {
  const [modalState, setModalState] = useRecoilState<ModalsState>(modalsState);
  const [aptState, setAptState] = useRecoilState(AptState);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    pyeong,
    houseHold,
    officialArea,
    personalArea,
    priceDefault,
    discountDefault,
    extendOption,
    minusOption,
  } = modalState.props?.modifyObject || {};
  const { mode } = modalState.props; // 현재 모달이 추가를 위한건지 수정을 위한건지 판단

  const handleComplete = () => {
    const isAddMode = mode === "add";
    const { modalIndex } = modalState.props;
    // 빈 값이 있는지 유효성 검사
    const isInputValid = Object.values(state).some(
      (value) => value === 0 || value === ""
    );
    if (isAddMode) {
      if (isInputValid) return alert("정보를 모두 기입해주세요.");
      dispatch({ type: "UPDATE_TOTAL_UPLOAD", payload: "" });

      setAptState((prev) => ({
        ...prev,
        total: Array.isArray(prev.total) ? [...prev.total, { ...state }] : [],
      }));
    } else {
      setAptState((prev) => ({
        ...prev,
        total: prev.total.map((item, index) =>
          // 평형 정보 table에서 몇번째 줄의 modalIndex가 현재 state의 배열의 index와 같을 때 처리
          index === modalIndex
            ? // 입력된 영역은 reducer에 저장되기 때문에 state.keys 아니면 기존의 state의 값을 사용
              {
                pyeong: state.pyeong || item.pyeong,
                houseHold: state.houseHold || item.houseHold,
                officialArea: state.officialArea || item.officialArea,
                personalArea: state.personalArea || item.personalArea,
                priceDefault: state.priceDefault || item.priceDefault,
                discountDefault: state.discountDefault || item.discountDefault,
                extendOption: state.extendOption || item.extendOption,
                minusOption: state.minusOption || item.minusOption,
              }
            : item
        ),
      }));
    }

    setModalState((prev) => ({
      ...prev,
      isOpen: false,
      modalType: "AptInfoModal",
      props: {},
    }));
  };

  return (
    <ModalLayout
      width={500}
      title={mode === "add" ? "평형 정보 추가" : "평형 정보 수정"}
    >
      <Modal.Content>
        <Modal.ContentInner>
          <Modal.InputContainer>
            <Modal.Sectiontitle>평 수 :</Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.Input
                type="text"
                min="0"
                event={(e) =>
                  dispatchAction(dispatch, "UPDATE_PYEONG", e.target.value)
                }
                defaultValue={pyeong || ""}
              />
            </Modal.InputField>
          </Modal.InputContainer>
          <Modal.InputContainer>
            <Modal.Sectiontitle>세대 수 :</Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.Input
                type="number"
                min="0"
                event={(e) =>
                  dispatchAction(dispatch, "UPDATE_HOUSEHOLD", e.target.value)
                }
                defaultValue={houseHold || ""}
              />
              <Modal.Text>가구</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>
          <Modal.InputContainer>
            <Modal.Sectiontitle>공급면적 / 전용면적 :</Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.InputField>
                <Modal.Input
                  type="number"
                  min="0"
                  event={(e) =>
                    dispatchAction(
                      dispatch,
                      "UPDATE_OFFICIAL_AREA",
                      e.target.value
                    )
                  }
                  defaultValue={officialArea || ""}
                />
                <Modal.Text>/</Modal.Text>
                <Modal.Input
                  type="number"
                  event={(e) =>
                    dispatchAction(
                      dispatch,
                      "UPDATE_PERSONAL_AREA",
                      e.target.value
                    )
                  }
                  defaultValue={personalArea || ""}
                />
              </Modal.InputField>
              <Modal.Text>㎡</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>
          <Modal.InputContainer>
            <Modal.Sectiontitle>분양가 :</Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.Input
                type="number"
                min="0"
                event={(e) =>
                  dispatchAction(
                    dispatch,
                    "UPDATE_PRICE_DEFAULT",
                    e.target.value
                  )
                }
                defaultValue={priceDefault || ""}
              />
              <Modal.Text>만원</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>
          <Modal.InputContainer>
            <Modal.Sectiontitle>할인가 :</Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.Input
                type="number"
                min="0"
                event={(e) =>
                  dispatchAction(
                    dispatch,
                    "UPDATE_DISCOUNT_DEFAULT",
                    e.target.value
                  )
                }
                defaultValue={discountDefault || ""}
              />
              <Modal.Text>만원</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>
          <Modal.InputContainer>
            <Modal.Sectiontitle>확장 옵션 :</Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.Input
                type="number"
                min="0"
                event={(e) =>
                  dispatchAction(
                    dispatch,
                    "UPDATE_EXTEND_OPTION",
                    e.target.value
                  )
                }
                defaultValue={extendOption || ""}
              />
              <Modal.Text>만원</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>
          <Modal.InputContainer>
            <Modal.Sectiontitle>기본 옵션 :</Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.Input
                type="number"
                min="0"
                event={(e) =>
                  dispatchAction(
                    dispatch,
                    "UPDATE_MINUS_OPTION",
                    e.target.value
                  )
                }
                defaultValue={minusOption || ""}
              />
              <Modal.Text>만원</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>
        </Modal.ContentInner>

        <Modal.BtnContainer>
          <Modal.ConfirmBtn onClick={() => handleComplete()}>
            {mode === "add" ? "추가" : "수정"}
          </Modal.ConfirmBtn>
        </Modal.BtnContainer>
      </Modal.Content>
    </ModalLayout>
  );
}

export default AptInfoModal;
