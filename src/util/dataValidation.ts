import { AptBasicInfoType } from "../types/types";

// ProductInfoForm 컴포넌트 내에 있는 함수

export const checkProductInfoSection = (state: AptBasicInfoType) => {
  const fieldsToCheck = [
    state.address,
    state.addressRest,
    state.buildingName,
    state.inDate,
    state.houseHoldSum,
    state.buildingsNum,
    state.floorAreaRatio,
    state.buildingCoverRatio,
    state.lowFloor,
    state.highFloor,
    state.constructorCompany,
    state.developerCompany,
    state.doorStructure,
    state.heating,
    state.parkingAll,
  ];

  // 모든 필드가 유효한지 검사
  const isAllFieldsValid = fieldsToCheck.every((field) => {
    return typeof field === "string"
      ? field.trim() !== ""
      : typeof field === "number"
      ? field !== 0
      : true;
  });
  return isAllFieldsValid;
};

export const checkGalleryInfo = (state: AptBasicInfoType) => {
  const isComplete: boolean =
    state.image.jogamdo.length !== 0 &&
    state.image.aptLayout.length !== 0 &&
    state.image.dongLayout.length !== 0 &&
    state.image.environment.length !== 0;

  return isComplete;
};

export const checkCommunityInfo = (state: AptBasicInfoType) => {
  const isComplete: boolean = state.image.communityFacilities.length !== 0;

  return isComplete;
};

export const checkPromotionInfo = (state: AptBasicInfoType) => {
  const isComplete: boolean =
    state.promotionPhone !== "" &&
    state.promotionSite !== "" &&
    state.promotionRest !== "";

  return isComplete;
};
