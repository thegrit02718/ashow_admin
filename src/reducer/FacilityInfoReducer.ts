import { Action } from "../types/Reducer";

export interface FacilState {
  facilityType: string;
  block: number;
  floor: number;
  facilityName: string;
  description: string;
}

export const initialState = {
  facilityType: "",
  block: 0,
  floor: 0,
  facilityName: "",
  description: "",
};

export const reducer = (state: FacilState, action: Action) => {
  switch (action.type) {
    case "UPDATE_FACILITYTYPE":
      return { ...state, facilityType: action.payload };
    case "UPDATE_BLOCK":
      return { ...state, block: action.payload };
    case "UPDATE_FLOOR":
      return { ...state, floor: action.payload };
    case "UPDATE_FAICILITYNAME":
      return {
        ...state,
        facilityName: action.payload,
      };

    case "UPDATE_DESCRIPTION":
      return { ...state, description: action.payload };

    default:
      return state;
  }
};
