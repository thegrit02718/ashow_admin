import { atom } from "recoil";
import { State } from "../reducer/aptPyeongInfoReducer";
import { FacilState } from "../reducer/FacilityInfoReducer";
export const AptState = atom({
  key: "aptState",
  default: {
    total: [] as State["total"],
  },
});

export const facilityState = atom({
  key: "facilityState",
  default: {
    total: {},
  },
});

export const AdrressState = atom({
  key: "addressState",
  default: {
    address: {},
  },
});
