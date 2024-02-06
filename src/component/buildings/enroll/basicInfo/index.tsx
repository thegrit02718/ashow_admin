import React, { useReducer, memo } from "react";
import * as Enroll from "../../../../style/buildings/AptEnrollment.styled";
import { useNavigate } from "react-router-dom";
import GallerySection from "./GallerySection";
import CommunitySection from "./CommunitySection";
import PromotionSection from "./PromotionSection";
import PageTitle from "../../../molecule/PageTitle";
import ProductInfoForm from "./ProductInfoSection";
import { aptBasicInfoState } from "../../../../recoil/stateProduct";
import { useRecoilState, useResetRecoilState } from "recoil";
import { postBasicInfoApi } from "../../../../api/enroll";
import { modifyDateHandler } from "../../../../util/modifyValue";
import { ImageUploadhandler } from "../../../../util/modifyValue";

interface BasicBuilidngInfoProps {
  setPaging: React.Dispatch<React.SetStateAction<number>>;
}

function BasicBuilidngInfo({ setPaging }: BasicBuilidngInfoProps) {
  const navigation = useNavigate();
  const [state, setState] = useRecoilState(aptBasicInfoState);
  const reset = useResetRecoilState(aptBasicInfoState);
  const dataIndicator = ["매물관리", "매물등록"];

  const addressCity = state.address.split(" ").slice(0, 1).join(" ");
  const addressCounty = state.address.split(" ").slice(1, 2).join(" ");

  const inDate = modifyDateHandler(state.inDate, state) as string;

  const addressRest =
    state.address.split(" ").slice(2).join(" ") + " " + state.addressRest;

  const request = {
    addressCity,
    addressCounty,
    addressRest,
    aptName: state.buildingName,
    buildingsNum: state.buildingsNum,
    houseHoldSum: state.houseHoldSum,
    parkingAll: state.parkingAll,
    parkingHouseHold: parseFloat(
      (state.buildingsNum / state.parkingAll).toFixed(2)
    ),
    buildingCoverRatio: state.buildingCoverRatio,
    floorAreaRatio: state.floorAreaRatio,
    parkingForm: state.parkingForm,
    doorStructure: state.doorStructure,
    heating: state.heating,
    constructorCompany: state.constructorCompany,
    developerCompany: state.developerCompany,
    lowFloor: state.lowFloor,
    highFloor: state.highFloor,
    inDate: inDate,
    promotionPhone: state.promotionPhone,
    promotionSite: state.promotionSite + state.promotionRest,
    companyHomePage: state.companyHomePage,
    pyengTypes: state.pyengTypes,
    contractCostPer: state.contractCostPer,
    middleCostPer: state.middleCostPer,
    restCpstPer: state.restCpstPer,
    pubTransSubway: state.pubTransSubway,
    pubTransSubwayDistance: state.pubTransSubwayDistance,
    pubTransTrain: state.pubTransTrain,
    pubTransTrainDistance: state.pubTransTrainDistance,
  };

  const typeMappings = {
    jogamdo: "airview",
    toosido: "3dview",
    dongLayout: "arrangehouse",
    aptLayout: "arrangebuildings",
    environment: "environment",
    communityFacilities: "community",
  };

  //뒤로 버튼 이벤트 핸들러
  const backEventHandler = () => {
    reset();
    navigation("/Buildings");
  };

  //다음 버튼 이벤트 핸들러
  const SubmitEventHandler = async () => {
    /*    for (const [key, value] of Object.entries(state)) {
      if (value?.length === 0) {
        console.log(key, value);
        alert(`매물의 모든 정보를 기입해주세요.`);
        showAlert = true;
        break;
      }

      if (key === "image") {
        const hasNon
        EmptyArrays = Object.values(value).every(
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

    setPaging((prev: number) => prev + 1);
    const formData = new FormData();
    await ImageUploadhandler(state.file, typeMappings, formData);
    /*  const response = await postBasicInfoApi(request, formData); */
  };
  return (
    <Enroll.Board>
      <PageTitle>
        <PageTitle.Title>매물 등록</PageTitle.Title>
        <PageTitle.SubTitle data={dataIndicator} />
      </PageTitle>

      <Enroll.Section>
        <ProductInfoForm />
        <GallerySection />
        <CommunitySection />
        <PromotionSection />
        <Enroll.BtnContainer>
          <Enroll.BackBtn type="button" onClick={backEventHandler}>
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
