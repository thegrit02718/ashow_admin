import { Action } from "./Reducer";

export type basicInfoType = {
  addressCity: string;
  addressCounty: string;
  addressRest: string;
  aptName: string;
  buildingsNum: number;
  houseHoldSum: number;
  parkingAll: number;
  parkingHouseHold: number;
  buildingCoverRatio: number;
  floorAreaRatio: number;
  parkingForm: string;
  doorStructure: string;
  heating: string;
  constructorCompany: string;
  developerCompany: string;
  lowFloor: number;
  highFloor: number;
  inDate: string;
  promotionPhone: string;
  promotionSite: string;
  contractCostPer: number;
  middleCostPer: number;
  restCpstPer: number;
  pyengTypes: string;
  companyHomePage: string;
  pubTransSubway: string;
  pubTransSubwayDistance: string;
  pubTransTrain: string;
  pubTransTrainDistance: string;
};

export interface AptBasicInfoType {
  address: string;
  addressRest: string;
  buildingName: string;
  buildingsNum: number;
  houseHoldSum: number;
  parkingAll: number;
  buildingCoverRatio: number;
  floorAreaRatio: number;
  parkingForm: string;
  doorStructure: string;
  heating: string;
  constructorCompany: string;
  developerCompany: string;
  lowFloor: number;
  highFloor: number;
  inDate: string;
  promotionPhone: string;
  promotionSite: string;
  promotionRest: string;
  contractCostPer: number;
  middleCostPer: number;
  restCpstPer: number;
  pyengTypes: string;
  companyHomePage: string;
  pubTransSubway: string;
  pubTransSubwayDistance: string;
  pubTransTrain: string;
  pubTransTrainDistance: string;
  image: {
    jogamdo: string[];
    toosido: string[];
    aptLayout: string[];
    dongLayout: string[];
    environment: string[];
    communityFacilities: string[];
  };
  imageSize: {
    jogamdo: number[];
    toosido: number[];
    aptLayout: number[];
    dongLayout: number[];
    environment: number[];
    communityFacilities: number[];
  };
}
export type ImageType = {
  jogamdo: string[];
  aptLayout: string[];
  dongLayout: string[];
  etc: string[];
  communityFacilities: string[];
};

export type ImageSizeType = {
  jogamdo: File[];
  toosido: File[];
  aptLayout: File[];
  dongLayout: File[];
  environment: File[];
  communityFacilities: File[];
};
export interface FacilityStateType {
  facilityType: string;
  block: string;
  floor: string;
  facilityName: string;
  description: string;
}

export interface PyeongType {
  mainType: boolean;
  pyengName: string;
  pyengKey: number;
  houseHold: number;
  officialArea: number;
  personalArea: number;
  priceDefaultHigh: number;
  priceDefaultLow: number;
  discountHigh: number;
  discountLow: number;
  ashowDiscountGriting: number;
  ashowDiscountFirstUse: number;
  ashowDiscountMember: number;
  ashowDiscountToday: number;
  keyColor: string;
  minusOption: number;
  extendOption: number;
  explanation: string;
  floorPlan: File;
  floorPlanDetail: File;
}

export interface PyeongItem extends PyeongType {
  floorPlanView: string;
  floorPlanDetailView: string;
}
export type PyeongState = {
  default: PyeongItem;
  total: PyeongItem[];
};
