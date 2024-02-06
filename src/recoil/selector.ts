import { selector } from "recoil";
import {
  productInfoState,
  galleryState,
  communityState,
  promotionState,
} from "./stateSection";

// sectionStatus 셀렉터에서 productInfoState를 포함시키도록 수정
export const sectionStatus = selector({
  key: "sectionStatus",
  get: ({ get }) => {
    const productInfo = get(productInfoState);
    const gallery = get(galleryState);
    const community = get(communityState);
    const promotion = get(promotionState);

    const totalSections = 4; // 전체 섹션의 갯수

    const completedSections = [
      productInfo,
      gallery,
      community,
      promotion,
    ].filter(Boolean).length;

    const progress = (completedSections / totalSections) * 100; // 현재 진행 상황률

    return {
      productInfo,
      gallery,
      community,
      promotion,
      progress,
    };
  },
});
