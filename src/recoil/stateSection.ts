import { atom } from "recoil";

export const productInfoState = atom({
  key: "productInfoSectionState",
  default: false,
});

export const galleryState = atom({
  key: "gallerySectionState",
  default: false,
});

export const communityState = atom({
  key: "communitySectionState",
  default: false,
});

export const promotionState = atom({
  key: "promotionSectionState",
  default: false,
});
