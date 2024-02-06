import React, { useReducer, SetStateAction, useState } from "react";
import * as Enroll from "../../../../style/buildings/AptEnrollment.styled";
import { useRecoilState } from "recoil";
import { modalsState } from "../../../../recoil/stateModal";
import { useRecoilValue } from "recoil";
import { aptPyeongInfoState } from "../../../../recoil/stateProduct";
import AptPyeongCard from "./AptPyeongCard";
import { useSetRecoilState } from "recoil";
import PageTitle from "../../../molecule/PageTitle";
import SectionTitle from "../../../molecule/SectionTitle";
import imageCompression from "browser-image-compression";
import { postPyengInfoApi } from "../../../../api/enroll";
import { useNavigate } from "react-router-dom";

interface AptPyeongInfoProps {
  setPaging: React.Dispatch<React.SetStateAction<number>>;
}

function AptPyeongInfo({ setPaging }: AptPyeongInfoProps) {
  const navigate = useNavigate();

  const [modalState, setModalState] = useRecoilState(modalsState);
  const [state, setState] = useRecoilState(aptPyeongInfoState);
  const dataIndicator = ["매물관리", "매물등록"];
  const [toggleIndex, setToggleIndex] = useState(-1);

  const modalEventHandler = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: true,
      modalType: "AptInfo",
      props: {
        mode: "add",
      },
    }));
    setState((prev) => ({
      ...prev,
      default: {
        mainType: false,
        pyengName: "",
        pyengKey: 0,
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
  };
  // ...더보기 아이콘 클릭을 위한 state
  const toggleEventhandler = (index: number) => {
    setToggleIndex((prev) => (prev === index ? -1 : index));
  };

  // 파일 확장자 변경 및 formData push
  const ImageUploadhandler = async (
    imageUrls: File,
    type: string,
    formData: FormData
  ) => {
    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1024,
    };
    const typeMappings: { [key: string]: string } = {
      floorPlan: "floorPlan",
      floorPlanDetail: "floorPlanDetail",
    };
    const compressedFile = await imageCompression(imageUrls, options);
    const fileName = `${typeMappings[type]}.png`;

    const convertedFile = new File([compressedFile], fileName, {
      type: "image/png",
    });
    formData.append("img", convertedFile);
  };

  const SubmitEventHandler = async () => {
    const formData = new FormData();
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

     */

    for (const pyeong of state.total) {
      try {
        const request = {
          mainType: pyeong.mainType,
          pyengName: pyeong.pyengName,
          pyengKey: pyeong.pyengKey,
          houseHold: pyeong.houseHold,
          officialArea: pyeong.officialArea,
          personalArea: pyeong.personalArea,
          priceDefaultLow: pyeong.priceDefaultLow,
          priceDefaultHigh: pyeong.priceDefaultHigh,
          discountLow: pyeong.discountLow,
          discountHigh: pyeong.discountHigh,
          ashowDiscountGriting: pyeong.ashowDiscountGriting,
          ashowDiscountFirstUse: pyeong.ashowDiscountFirstUse,
          ashowDiscountMember: pyeong.ashowDiscountMember,
          ashowDiscountToday: pyeong.ashowDiscountToday,
          keyColor: pyeong.keyColor,
          minusOption: pyeong.minusOption,
          extendOption: pyeong.extendOption,
          explanation: pyeong.explanation,
          floorPlan: pyeong.floorPlan,
          floorPlanDetail: pyeong.floorPlanDetail,
        };

        await ImageUploadhandler(pyeong.floorPlan, "floorPlan", formData);
        await ImageUploadhandler(
          pyeong.floorPlanDetail,
          "floorPlanDetail",
          formData
        );
        const response = await postPyengInfoApi(request, formData);
      } catch (error) {
        console.log("에러", error);
      }
    }
    alert("등록되었습니다");
    navigate("/buildings");
  };

  return (
    <Enroll.Board $width={1100}>
      <PageTitle>
        <PageTitle.Title>매물 등록</PageTitle.Title>
        <PageTitle.SubTitle data={dataIndicator} />
      </PageTitle>
      <Enroll.Section>
        <div>
          <SectionTitle>
            <SectionTitle.Title>평형 정보</SectionTitle.Title>
          </SectionTitle>
          <Enroll.AddBtn onClick={modalEventHandler}>
            <Enroll.AddIcon /> 평형 추가
          </Enroll.AddBtn>
          <Enroll.FlexColumn>
            <Enroll.Card>
              <Enroll.Table style={{ borderCollapse: "collapse" }}>
                <thead>
                  <Enroll.Tr>
                    <Enroll.Th width="40px">메인평형</Enroll.Th>
                    <Enroll.Th>평형</Enroll.Th>
                    <Enroll.Th>세대 수</Enroll.Th>
                    <Enroll.Th>공급 면적</Enroll.Th>
                    <Enroll.Th>전용 면적</Enroll.Th>
                    <Enroll.Th>공급가(최저)</Enroll.Th>
                    <Enroll.Th>공급가(최고)</Enroll.Th>
                    <Enroll.Th>할인가(최저)</Enroll.Th>
                    <Enroll.Th>할인가(최고)</Enroll.Th>
                    <Enroll.Th>
                      아쇼할인
                      <br />
                      (계약축하)
                    </Enroll.Th>
                    <Enroll.Th>
                      아쇼할인
                      <br />
                      (첫이용)
                    </Enroll.Th>
                    <Enroll.Th>
                      아쇼할인
                      <br />
                      (회원전용)
                    </Enroll.Th>
                    <Enroll.Th>
                      아쇼할인
                      <br />
                      (오늘계약시)
                    </Enroll.Th>
                    <Enroll.Th>마이너스 옵션</Enroll.Th>
                    <Enroll.Th>확장 옵션</Enroll.Th>
                    <Enroll.Th width="30px" />
                  </Enroll.Tr>
                </thead>
                <tbody>
                  {state.total.map((state, idx) => {
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
        </div>
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
