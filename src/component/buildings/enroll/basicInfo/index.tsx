import React, { useReducer } from "react";
import * as Enroll from "../../../../style/buildings/AptEnrollment.styled";
import { useNavigate } from "react-router-dom";
import { reducer, initialState } from "../../../../reducer/aptBasicInfoReducer";
import PageTitle from "../../../molecule/PageTitle";
import ProductInfoForm from "./ProductInfoSection";
import GallerySection from "./GallerySection";
import CommnunitySection from "./CommunitySection";
import PromotionSection from "./PromotionSection";

type Props = {
  setPaging: React.SetStateAction<any>;
};

function BasicBuilidngInfo({ setPaging }: Props) {
  const navigation = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, "리듀서");
  const dataIndicator = ["매물관리", "매물등록"];

  const request = {
    address: state.address,
    addressRest: state.addressRest,
    buildingCoverRatio: state.buildingCoverRatio,
    buildingName: state.buildingName,
    buildingsNum: state.buildingsNum,
    constructorCompany: state.constructorCompany,
    developerCompany: state.developerCompany,
    doorStructure: state.doorStructure,
    floorAreaRatio: state.floorAreaRatio,
    heating: state.heating,
    highFloor: state.highFloor,
    inDate: state.inDate,
    lowFloor: state.lowFloor,
    maintenanceCost: state.maintenanceCost,
    parkingAll: state.parkingAll,
    parkingForm: state.parkingForm,
  };
  /**
   * totalSize는 `state.imageSize` 객체의 각 속성에 있는 배열들의 값을 더한 후,
   * 그 합계 값을 배열로 반환합니다.
   *
   * @param {Object} state.imageSize - 이미지 크기 정보를 담은 객체
   * @returns {number[]} 각 객체 내부의 배열에 있는 이미지 사이즈를 더한 합계
   *
   */

  // 현재 탭 내부에 이미지들을 formData에 담아줄 함수
  const ImageUploadhandler = async (
    imageUrls: string[],
    type: string,
    formData: FormData
  ) => {
    // 배열형태의 이미지 url을 객체 형태로 formData에 넣음
    const imageObjects = imageUrls.map((imageUrl) => ({
      name: type,
      url: imageUrl,
    }));

    imageUrls.forEach(async () => {
      formData.append("img", JSON.stringify(imageObjects));
    });
  };
  const SubmitEventHandler = async () => {
    let showAlert = false;

    /*    for (const [key, value] of Object.entries(state)) {
      if (value?.length === 0) {
        console.log(key, value);
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

    const formData = new FormData();

    await ImageUploadhandler(state.image.aptLayout, "aptLayout", formData);
    await ImageUploadhandler(state.image.jogamdo, "jogamdo", formData);
    await ImageUploadhandler(state.image.etc, "toosido", formData);
    await ImageUploadhandler(state.image.dongLayout, "dongLayout", formData);
    await ImageUploadhandler(
      state.image.communityFacilities,
      "communityFacilities",
      formData
    );

    /* const response = await createPostApi(request, formData); */
    if (!showAlert) {
      setPaging((prev: number) => prev + 1);
    }
  };
  return (
    <Enroll.Board>
      <PageTitle>
        <PageTitle.Title>매물 등록</PageTitle.Title>
        <PageTitle.SubTitle data={dataIndicator} />
      </PageTitle>

      <Enroll.Section>
        <ProductInfoForm state={state} dispatch={dispatch} />
        <GallerySection state={state} dispatch={dispatch} />
        <CommnunitySection state={state} dispatch={dispatch} />
        <PromotionSection state={state} dispatch={dispatch} />
        <Enroll.BtnContainer>
          <Enroll.BackBtn
            type="button"
            onClick={() => navigation("/Buildings")}
          >
            뒤로
          </Enroll.BackBtn>
          <Enroll.SaveBtn type="button" onClick={SubmitEventHandler}>
            다음
          </Enroll.SaveBtn>
        </Enroll.BtnContainer>
      </Enroll.Section>
    </Enroll.Board>
  );
}

export default BasicBuilidngInfo;
