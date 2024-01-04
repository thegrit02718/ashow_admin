import { atom } from "recoil";

export const modalsState = atom({
  key: "modalsState",
  default: {
    isOpen: false,
    modalType: "",
    props: {},
  },
});
