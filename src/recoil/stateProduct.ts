import { atom, RecoilState } from "recoil";
import { PyeongState, PyeongItem } from "../types/types";
import { AddressModalProps } from "../types/Modal";

type AddressStateType = {
  address: string;
  promotionSite: string;
};

export const selectState = atom({
  key: "selectItem",
  default: {
    select: {},
  },
});

export const AptState = atom({
  key: "aptState",
  default: {
    total: [] as PyeongState["total"],
  },
});

export const facilityState = atom({
  key: "facilityState",
  default: {
    facilityType: "",
    block: "",
    floor: "",
    facilityName: "",
    description: "",
  },
});

export const AdrressState = atom<AddressStateType>({
  key: "addressState",
  default: {
    address: "",
    promotionSite: "",
  },
});

export const pyengCheckState = atom({
  key: "checkState",
  default: {
    checkedIndex: 0,
    toggleIndex: -1,
  },
});

export const aptBasicInfoState = atom({
  key: "reducerState",
  default: {
    address: "",
    addressRest: "",
    buildingName: "",
    buildingsNum: 0,
    houseHoldSum: 0,
    parkingAll: 0,
    buildingCoverRatio: 0,
    floorAreaRatio: 0,
    parkingForm: "",
    doorStructure: "",
    heating: "",
    constructorCompany: "",
    developerCompany: "",
    lowFloor: 0,
    highFloor: 0,
    inDate: "",
    promotionPhone: "",
    promotionSite: "",
    promotionRest: "",
    contractCostPer: 0,
    middleCostPer: 0,
    restCpstPer: 0,
    pyengTypes: "",
    companyHomePage: "",
    pubTransSubway: "",
    pubTransSubwayDistance: "",
    pubTransTrain: "",
    pubTransTrainDistance: "",
    image: {
      jogamdo: [],
      toosido: [],
      aptLayout: [],
      dongLayout: [],
      environment: [],
      communityFacilities: [],
    },
    imageSize: {
      jogamdo: [],
      toosido: [],
      aptLayout: [],
      dongLayout: [],
      environment: [],
      communityFacilities: [],
    },
    file: {
      jogamdo: [],
      toosido: [],
      aptLayout: [],
      dongLayout: [],
      environment: [],
      communityFacilities: [],
    },
  },
});

export const aptPyeongInfoState = atom<PyeongState>({
  key: "aptPyeongInfoState",
  default: {
    default: {
      mainType: false,
      pyengName: "",
      pyengKey: 0,
      houseHold: 0,
      officialArea: 0,
      personalArea: 0,
      priceDefaultLow: 0,
      priceDefaultHigh: 0,
      discountLow: 0,
      discountHigh: 0,
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

    total: [],
  },
});
