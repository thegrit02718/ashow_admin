import React from "react";
import { ChangeEvent } from "react";
import ModalLayout from "./ModalLayout";
import { useRecoilState } from "recoil";
import { modalsState } from "../../recoil/stateModal";
import * as Modal from "../../style/modal/AptInfoModal.styled";
import { aptPyeongInfoState } from "../../recoil/stateProduct";
import { PyeongState } from "../../types/types";
import imageCompression from "browser-image-compression";

interface ModalsState {
  isOpen: boolean;
  modalType: string;
  props: Record<string, any>;
}

function AptInfoModal({ ...props }) {
  const [modalState, setModalState] = useRecoilState<ModalsState>(modalsState);
  const [state, setState] = useRecoilState<PyeongState>(aptPyeongInfoState);
  console.log(state, "평 상태");

  const {
    mainType,
    pyengName,
    pyengKey,
    houseHold,
    officialArea,
    personalArea,
    priceDefaultLow,
    priceDefaultHigh,
    discountLow,
    discountHigh,
    ashowDiscountGriting,
    ashowDiscountFirstUse,
    ashowDiscountMember,
    ashowDiscountToday,
    keyColor,
    minusOption,
    extendOption,
    explanation,
    floorPlan,
    floorPlanDetail,
    floorPlanView,
    floorPlanDetailView,
  } = state.default;
  const { mode, modalIndex } = modalState.props; // 현재 모달이 추가를 위한건지 수정을 위한건지 판단

  const handleComplete = async () => {
    const isAddMode = mode === "add";
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const newPyeongKey = state.total.length + 1;
    const { modalIndex } = modalState.props;

    // 빈 값이 있는지 유효성 검사
    const isInputValid = Object.entries(state.default).some(([key, value]) => {
      if (key === "pyengKey" || key === "keyColor") {
        return false;
      }

      return value === 0 || value === "";
    });

    if (isAddMode) {
      if (isInputValid) return alert("정보를 모두 기입해주세요.");
      setState((prev: any) => ({
        total: [
          ...prev.total,
          {
            mainType: newPyeongKey == 1 ? true : false,
            pyengName,
            pyengKey: newPyeongKey,
            houseHold,
            officialArea,
            personalArea,
            priceDefaultLow,
            priceDefaultHigh,
            discountLow,
            discountHigh,
            ashowDiscountGriting,
            ashowDiscountFirstUse,
            ashowDiscountMember,
            ashowDiscountToday,
            keyColor: randomColor,
            minusOption,
            extendOption,
            explanation,
            floorPlanView,
            floorPlanDetailView,
            floorPlan,
            floorPlanDetail,
          },
        ],
        default: {
          mainType,
          pyengName: "",
          pyengKey,
          houseHold: 0,
          officialArea: 0,
          personalArea: 0,
          priceDefaultHigh: 0,
          priceDefaultLow: 0,
          discountHigh: 0,
          discountLow: 0,
          ashowDiscountGriting: 0,
          ashowDiscountFirstUse: 0,
          ashowDiscountMember: 0,
          ashowDiscountToday: 0,
          keyColor: "",
          minusOption: 0,
          extendOption: 0,
          explanation: "",
          floorPlanView: "",
          floorPlanDetailView: "",
          floorPlan: new File([], ""),
          floorPlanDetail: new File([], ""),
        },
      }));
    } else {
      setState((prev: any) => ({
        ...prev,
        total: prev.total.filter((_: any, index: number) =>
          index === modalIndex ? { ...state.default } : _
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
  const ImageChangeHandler = async (
    e: ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file) {
        // Blob을 읽기 위한 FileReader 생성
        const reader = new FileReader();

        // FileReader 로드 완료 시 호출되는 콜백
        reader.onloadend = () => {
          // 읽은 데이터를 base64 문자열로 변환하여 리코일 상태에 저장
          const source = reader.result as string;
          setState((prev: any) => ({
            ...prev,
            default: {
              ...prev.default,
              [category]: file,
              [category + "View"]: source,
            },
          }));
        };

        // Blob을 읽기
        reader.readAsDataURL(file);
      }
    }
  };
  return (
    <ModalLayout
      width={500}
      title={mode === "add" ? "평형 정보 추가" : "평형 정보 수정"}
    >
      <Modal.Content>
        <Modal.ContentInner>
          <Modal.InputContainer>
            <Modal.Sectiontitle>평형:</Modal.Sectiontitle>
            <Modal.Input
              type="text"
              event={(e) =>
                setState((prev: any) => ({
                  ...prev,
                  default: {
                    ...prev.default,
                    pyengName: e.target.value,
                  },
                }))
              }
              defaultValue={pyengName || ""}
            />
          </Modal.InputContainer>
          <Modal.InputContainer>
            <Modal.Sectiontitle>세대 수 :</Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.Input
                type="number"
                min="0"
                event={(e) =>
                  setState((prev: any) => ({
                    ...prev,
                    default: {
                      ...prev.default,
                      houseHold: Number(e.target.value),
                    },
                  }))
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
                    setState((prev: any) => ({
                      ...prev,
                      default: {
                        ...prev.default,
                        officialArea: Number(e.target.value),
                      },
                    }))
                  }
                  defaultValue={officialArea || ""}
                />
                <Modal.Text>/</Modal.Text>
                <Modal.Input
                  type="number"
                  event={(e) =>
                    setState((prev: any) => ({
                      ...prev,
                      default: {
                        ...prev.default,
                        personalArea: Number(e.target.value),
                      },
                    }))
                  }
                  defaultValue={personalArea || ""}
                />
              </Modal.InputField>
              <Modal.Text>㎡</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>
          <Modal.InputContainer>
            <Modal.Sectiontitle>
              공급가(최저) ~ 공급가(최고) :
            </Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.InputField>
                <Modal.Input
                  type="number"
                  min="0"
                  event={(e) =>
                    setState((prev: any) => ({
                      ...prev,
                      default: {
                        ...prev.default,
                        priceDefaultLow: Number(e.target.value),
                      },
                    }))
                  }
                  defaultValue={priceDefaultLow || ""}
                />
                <Modal.Text>/</Modal.Text>
                <Modal.Input
                  type="number"
                  event={(e) =>
                    setState((prev: any) => ({
                      ...prev,
                      default: {
                        ...prev.default,
                        priceDefaultHigh: Number(e.target.value),
                      },
                    }))
                  }
                  defaultValue={priceDefaultHigh || ""}
                />
              </Modal.InputField>
              <Modal.Text>만원</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>

          <Modal.InputContainer>
            <Modal.Sectiontitle>
              할인가(최저) ~ 할인가(최고) :
            </Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.InputField>
                <Modal.Input
                  type="number"
                  min="0"
                  event={(e) =>
                    setState((prev: any) => ({
                      ...prev,
                      default: {
                        ...prev.default,
                        discountLow: Number(e.target.value),
                      },
                    }))
                  }
                  defaultValue={discountLow || ""}
                />
                <Modal.Text>/</Modal.Text>
                <Modal.Input
                  type="number"
                  event={(e) =>
                    setState((prev: any) => ({
                      ...prev,
                      default: {
                        ...prev.default,
                        discountHigh: Number(e.target.value),
                      },
                    }))
                  }
                  defaultValue={discountHigh || ""}
                />
              </Modal.InputField>
              <Modal.Text>만원</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>
          <Modal.InputContainer>
            <Modal.Sectiontitle>아쇼할인(계약축하)</Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.Input
                type="number"
                min="0"
                event={(e) =>
                  setState((prev: any) => ({
                    ...prev,
                    default: {
                      ...prev.default,
                      ashowDiscountGriting: Number(e.target.value),
                    },
                  }))
                }
                defaultValue={ashowDiscountGriting || ""}
              />
              <Modal.Text>만원</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>
          <Modal.InputContainer>
            <Modal.Sectiontitle>아쇼할인(첫이용)</Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.Input
                type="number"
                min="0"
                event={(e) =>
                  setState((prev: any) => ({
                    ...prev,
                    default: {
                      ...prev.default,
                      ashowDiscountFirstUse: Number(e.target.value),
                    },
                  }))
                }
                defaultValue={ashowDiscountFirstUse || ""}
              />
              <Modal.Text>만원</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>
          <Modal.InputContainer>
            <Modal.Sectiontitle>아쇼할인(회원전용)</Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.Input
                type="number"
                min="0"
                event={(e) =>
                  setState((prev: any) => ({
                    ...prev,
                    default: {
                      ...prev.default,
                      ashowDiscountMember: Number(e.target.value),
                    },
                  }))
                }
                defaultValue={ashowDiscountMember || ""}
              />
              <Modal.Text>만원</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>
          <Modal.InputContainer>
            <Modal.Sectiontitle>아쇼할인(오늘계약시)</Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.Input
                type="number"
                min="0"
                event={(e) =>
                  setState((prev: any) => ({
                    ...prev,
                    default: {
                      ...prev.default,
                      ashowDiscountToday: Number(e.target.value),
                    },
                  }))
                }
                defaultValue={ashowDiscountToday || ""}
              />
              <Modal.Text>만원</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>
          <Modal.InputContainer>
            <Modal.Sectiontitle>마이너스 옵션 :</Modal.Sectiontitle>
            <Modal.InputField>
              <Modal.Input
                type="number"
                min="0"
                event={(e) =>
                  setState((prev: any) => ({
                    ...prev,
                    default: {
                      ...prev.default,
                      minusOption: Number(e.target.value),
                    },
                  }))
                }
                defaultValue={minusOption || ""}
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
                  setState((prev: any) => ({
                    ...prev,
                    default: {
                      ...prev.default,
                      extendOption: Number(e.target.value),
                    },
                  }))
                }
                defaultValue={extendOption || ""}
              />
              <Modal.Text>만원</Modal.Text>
            </Modal.InputField>
          </Modal.InputContainer>
          <Modal.InputContainer $columns>
            <Modal.Sectiontitle>설명 :</Modal.Sectiontitle>
            <Modal.TextArea
              spellCheck="false"
              onChange={(e) =>
                setState((prev: any) => ({
                  ...prev,
                  default: {
                    ...prev.default,
                    explanation: e.target.value,
                  },
                }))
              }
              defaultValue={explanation || ""}
            />
          </Modal.InputContainer>
          <Modal.ImageBox>
            <Modal.InputContainer $columns>
              <Modal.Sectiontitle>평면도 :</Modal.Sectiontitle>
              <Modal.FloorPlan>
                <label htmlFor="pyeong">
                  {state.default.floorPlanView !== "" ? (
                    <Modal.Image
                      src={
                        mode === "add"
                          ? state.default.floorPlanView
                          : state.total[modalIndex].floorPlanView
                      }
                      alt="평면도"
                    />
                  ) : (
                    <Modal.EmptyBox>
                      <Modal.PlusIcon />
                    </Modal.EmptyBox>
                  )}
                </label>
                <input
                  type="file"
                  id="pyeong"
                  hidden
                  onChange={(e) => ImageChangeHandler(e, "floorPlan")}
                />
              </Modal.FloorPlan>
            </Modal.InputContainer>
            <Modal.InputContainer $columns>
              <Modal.Sectiontitle>평면도(상세) :</Modal.Sectiontitle>
              <Modal.FloorPlan>
                <label htmlFor="pyeongDetail">
                  {state.default.floorPlanDetailView !== "" ? (
                    <Modal.Image
                      src={
                        mode === "add"
                          ? state.default.floorPlanDetailView
                          : state.total[modalIndex].floorPlanDetailView
                      }
                      alt="평면도(상세)"
                    />
                  ) : (
                    <Modal.EmptyBox>
                      <Modal.PlusIcon />
                    </Modal.EmptyBox>
                  )}
                </label>
                <input
                  type="file"
                  id="pyeongDetail"
                  hidden
                  onChange={(e) => ImageChangeHandler(e, "floorPlanDetail")}
                />
              </Modal.FloorPlan>
            </Modal.InputContainer>
          </Modal.ImageBox>
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
