import { Action } from "../types/Reducer";
import { FacilState } from "./FacilityInfoReducer";

export type ImageType = {
  jogamdo: string[];
  aptLayout: string[];
  dongLayout: string[];
  etc: string[];
  communityFacilities: string[];
};
export type ImageSizeType = {
  jogamdo: File[];
  aptLayout: File[];
  dongLayout: File[];
  etc: File[];
  communityFacilities: File[];
};
export interface State {
  address: string;
  addressRest: string;
  buildingName: string;
  buildingsNum: number;
  houseHoldSum: number;
  parkingAll: number;
  /*   parkingHouseHold: number; */
  /*  discountPer: number; */
  buildingCoverRatio: number;
  floorAreaRatio: number;
  parkingForm: string;
  doorStructure: string;
  heating: string;
  constructorCompany: string;
  developerCompany: string;
  highFloor: number;
  lowFloor: number;
  maintenanceCost: number;
  inDate: string;
  /*   companyHomePage: string; */
  promotionPhone: string;
  promotionSite: string;
  promotionRest: string;
  /* sitePhone: string; */
  communityFacilities: FacilState[];
  image: ImageType;
  imageSize: ImageSizeType;
}

export const initialState = {
  address: "",
  addressRest: "",
  buildingName: "",
  buildingsNum: 0,
  houseHoldSum: 0,
  parkingAll: 0,
  /*  parkingHouseHold: 0, */
  /*  discountPer: 0, */
  buildingCoverRatio: 0,
  floorAreaRatio: 0,
  parkingForm: "",
  doorStructure: "",
  heating: "",
  constructorCompany: "",
  developerCompany: "",
  lowFloor: 0,
  highFloor: 0,
  maintenanceCost: 0,
  inDate: "",
  /*   companyHomePage: "", */
  promotionPhone: "",
  promotionSite: "",
  promotionRest: "",
  /*  sitePhone: "", */
  communityFacilities: [],
  image: {
    jogamdo: [],
    aptLayout: [],
    dongLayout: [],
    etc: [],
    communityFacilities: [],
  },
  imageSize: {
    jogamdo: [],
    aptLayout: [],
    dongLayout: [],
    etc: [],
    communityFacilities: [],
  },
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_ADDRESS":
      return { ...state, address: action.payload };
    case "UPDATE_LAST_ADDRESS":
      return { ...state, addressRest: action.payload };
    case "UPDATE_BUILDING_NAME":
      return { ...state, buildingName: action.payload };
    case "UPDATE_BUILDINGSNUM":
      return { ...state, buildingsNum: action.payload };
    case "UPDATE_HOUSEHOLDSUM":
      return { ...state, houseHoldSum: action.payload };
    case "UPDATE_PARKINGALL":
      return { ...state, parkingAll: action.payload };
    /*   case "UPDATE_PARKINGHOUSEHOLD":
      return { ...state, parkingHouseHold: action.payload }; */
    /* case "UPDATE_DISCOUNTPER":
      return { ...state, discountPer: action.payload }; */
    case "UPDATE_COVERRATIO":
      return { ...state, buildingCoverRatio: action.payload };
    case "UPDATE_AREARATIO":
      return { ...state, floorAreaRatio: action.payload };
    case "UPDATE_PARKINGFORM":
      return { ...state, parkingForm: action.payload };
    case "UPDATE_DOORSTRUCTURE":
      return { ...state, doorStructure: action.payload };
    case "UPDATE_HEATING":
      return { ...state, heating: action.payload };
    case "UPDATE_CONSTRUCTOR":
      return { ...state, constructorCompany: action.payload };
    case "UPDATE_DEVELOPER":
      return { ...state, developerCompany: action.payload };
    case "UPDATE_LOWFLOOR":
      return { ...state, lowFloor: action.payload };
    case "UPDATE_HIGHFLOOR":
      return { ...state, highFloor: action.payload };
    case "UPDATE_MAINTENANCECOST":
      return { ...state, maintenanceCost: action.payload };
    case "UPDATE_INDATE":
      return { ...state, inDate: action.payload };
    /* case "UPDATE_HOMEPAGE":
      return { ...state, companyHomePage: action.payload }; */
    case "UPDATE_PROMOTIONPHONE":
      return { ...state, promotionPhone: action.payload };
    case "UPDATE_PROMOTIONSITE":
      return { ...state, promotionSite: action.payload };
    case "UPDATE_PROMOTIONREST":
      return { ...state, promotionRest: action.payload };
    /*  case "UPDATE_SITEPHONE":
      return { ...state, sitePhone: action.payload }; */
    case "UPDATE_COMMUNITY_FACILITY":
      return {
        ...state,
        communityFacilities: [...state.communityFacilities, action.payload],
      };
    case "ADD_IMAGE": {
      const { category, source } = action.payload;

      const updatedImageCategory = {
        ...state.image,
        [category]: [
          ...state.image[category as keyof typeof state.image],
          source,
        ],
      };

      // 이미지 추가 후 이미지 크기 업데이트
      const imageSizeList = [
        ...state.imageSize[category as keyof typeof state.imageSize],
      ];

      return {
        ...state,
        image: updatedImageCategory,
        imageSize: {
          ...state.imageSize,
          [category]: imageSizeList,
        },
      };
    }

    case "DELETE_IMAGE": {
      const { category, index } = action.payload;
      const ImageList = [...state.image[category as keyof typeof state.image]];
      const updateList = ImageList.filter((_, idx) => idx !== index);

      return {
        ...state,
        image: { ...state.image, [category]: updateList },
      };
    }
    case "UPDATE_IMAGE": {
      const { category, image, index } = action.payload;
      const ImageList = [...state.image[category as keyof typeof state.image]];
      const updateList = ImageList.map((item, i) =>
        i === index ? image : item
      );

      return {
        ...state,
        image: {
          ...state.image,
          [category]: updateList,
        },
      };
    }
    case "UPDATE_IMAGE_SIZE": {
      const { category, size, index } = action.payload;
      const currentSizeList = [
        ...state.imageSize[category as keyof typeof state.imageSize],
      ];
      // 이미지 사이즈가 존재하는 index이면 해당 index의 이미지 사이즈를 변경
      if (currentSizeList[index]) {
        currentSizeList[index] = size;
      } else {
        // 이미지 사이즈가 존재하지 않는 index이면 추가
        currentSizeList.push(size);
      }
      return {
        ...state,
        imageSize: {
          ...state.imageSize,
          [category]: currentSizeList,
        },
      };
    }
    case "DELETE_IMAGE_SIZE": {
      const { category, index } = action.payload;
      const ImageSizeList = [
        ...state.imageSize[category as keyof typeof state.imageSize],
      ];
      const deleteSIzeList = ImageSizeList.filter((_, idx) => idx !== index);

      return {
        ...state,
        imageSize: { ...state.imageSize, [category]: deleteSIzeList },
      };
    }
    default:
      return state;
  }
};
