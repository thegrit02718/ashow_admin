import React, { useReducer, SetStateAction, useState } from "react";
import * as Enroll from "../../../../style/buildings/AptEnrollment.styled";
import { useRecoilState } from "recoil";
import { modalsState } from "../../../../recoil/stateModal";
import {
  reducer,
  initialState,
} from "../../../../reducer/aptPyeongInfoReducer";
import { useRecoilValue } from "recoil";
import { AptState } from "../../../../recoil/stateProduct";
import AptPyeongCard from "./AptPyeongCard";

interface AptPhyeongInfoProps {
  setPaging: (value: SetStateAction<number>) => void;
}

function AptPyeongInfo({ setPaging }: AptPhyeongInfoProps) {
  const [modalState, setModalState] = useRecoilState(modalsState);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [toggleIndex, setToggleIndex] = useState(-1);

  const aptState = useRecoilValue(AptState);

  const modalEventHandler = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: true,
      modalType: "AptInfo",
      props: {
        mode: "add",
      },
    }));
  };
  const toggleEventhandler = (index: number) => {
    setToggleIndex((prev) => (prev === index ? -1 : index));
  };

  const SubmitEventHandler = async () => {
    /*  let showAlert = false;

    for (const [key, value] of Object.entries(state)) {
      if (value?.length === 0) {
        alert(`매물의 모든 정보를 기입해주세요.`);
        showAlert = true;
        break;
      }

      if (key === "image") {
        const hasNonEmptyArrays = Object.values(value).every(
          (imageArray) =>
            Array.isArray(imageArray) && imageArray.every((img) => img !== "")
        );
        if (!hasNonEmptyArrays) {
          alert("이미지를 모두 업로드해주세요.");
          showAlert = true;
          break;
        }
      }
    }

    if (!showAlert) {
      setPaging((prev) => prev + 1);
    } */
  };
  return (
    <Enroll.Board>
      <Enroll.SectionTitle>평형 정보</Enroll.SectionTitle>
      <Enroll.Section>
        <Enroll.AddBtn onClick={modalEventHandler}>
          <Enroll.AddIcon /> 평형 추가
        </Enroll.AddBtn>
        <Enroll.FlexColumn>
          <Enroll.Card>
            <Enroll.Table style={{ borderCollapse: "collapse" }}>
              <thead>
                <Enroll.Tr>
                  <Enroll.Th>평형</Enroll.Th>
                  <Enroll.Th>세대 수</Enroll.Th>
                  <Enroll.Th>공급면적</Enroll.Th>
                  <Enroll.Th>전용면적</Enroll.Th>
                  <Enroll.Th>분양가</Enroll.Th>
                  <Enroll.Th>할인가</Enroll.Th>
                  <Enroll.Th>확장 옵션</Enroll.Th>
                  <Enroll.Th>기본 옵션</Enroll.Th>
                  <Enroll.Th width="50px" />
                </Enroll.Tr>
              </thead>
              <tbody>
                {aptState.total.map((state, idx) => {
                  return (
                    <AptPyeongCard
                      key={idx}
                      state={state}
                      index={idx}
                      toggleIndex={toggleIndex}
                      event={() => toggleEventhandler(idx)}
                    />
                  );
                })}
              </tbody>
            </Enroll.Table>
          </Enroll.Card>
        </Enroll.FlexColumn>
      </Enroll.Section>

      <Enroll.BtnContainer>
        <Enroll.BackBtn
          type="button"
          onClick={() => setPaging((prev) => prev - 1)}
        >
          뒤로
        </Enroll.BackBtn>
        <Enroll.SaveBtn type="button" onClick={() => SubmitEventHandler()}>
          완료
        </Enroll.SaveBtn>
      </Enroll.BtnContainer>
    </Enroll.Board>
  );
}

export default AptPyeongInfo;
