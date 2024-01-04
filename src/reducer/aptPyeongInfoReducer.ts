import { Action } from "../types/Reducer";

export type State = {
  pyeong: number;
  houseHold: number;
  officialArea: number;
  personalArea: number;
  priceDefault: number;
  discountDefault: number;
  extendOption: number;
  minusOption: number;
  total: {
    pyeong: number;
    houseHold: number;
    officialArea: number;
    personalArea: number;
    priceDefault: number;
    discountDefault: number;
    extendOption: number;
    minusOption: number;
  }[];
};

export const initialState = {
  pyeong: "",
  houseHold: 0,
  officialArea: 0,
  personalArea: 0,
  priceDefault: 0,
  discountDefault: 0,
  extendOption: 0,
  minusOption: 0,
  total: [] as {
    pyeong: number;
    houseHold: number;
    officialArea: number;
    personalArea: number;
    priceDefault: number;
    discountDefault: number;
    extendOption: number;
    minusOption: number;
  }[],
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_PYEONG":
      return { ...state, pyeong: action.payload };
    case "UPDATE_HOUSEHOLD":
      return { ...state, houseHold: action.payload };
    case "UPDATE_OFFICIAL_AREA":
      return { ...state, officialArea: action.payload };
    case "UPDATE_PERSONAL_AREA":
      return { ...state, personalArea: action.payload };
    case "UPDATE_PRICE_DEFAULT":
      return { ...state, priceDefault: action.payload };
    case "UPDATE_DISCOUNT_DEFAULT":
      return { ...state, discountDefault: action.payload };
    case "UPDATE_EXTEND_OPTION":
      return { ...state, extendOption: action.payload };
    case "UPDATE_MINUS_OPTION":
      return { ...state, minusOption: action.payload };
    case "UPDATE_TOTAL_UPLOAD":
      return {
        ...state,
        total: [
          ...state.total,
          {
            pyeong: state.pyeong,
            houseHold: state.houseHold,
            officialArea: state.officialArea,
            personalArea: state.personalArea,
            priceDefault: state.priceDefault,
            discountDefault: state.discountDefault,
            extendOption: state.extendOption,
            minusOption: state.minusOption,
          },
        ],
      };
    default:
      return state;
  }
};
