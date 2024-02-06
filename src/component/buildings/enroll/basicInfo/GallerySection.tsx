import React, { useEffect } from "react";
import * as Tab from "../../../../style/component/tab/Tabs.styled";
import Tabs from "../../../molecule/Tabs";

import SectionTitle from "../../../molecule/SectionTitle";
import { useSetRecoilState } from "recoil";
import { checkGalleryInfo } from "../../../../util/dataValidation";
import { galleryState } from "../../../../recoil/stateSection";
import useDebounce from "../../../../hooks/useDebounce";
import { useRecoilState } from "recoil";
import { aptBasicInfoState } from "../../../../recoil/stateProduct";
import {
  getImageSizeHandler,
  MAX_FILE_SIZE_IN_MB,
} from "../../../../util/checkFile";

function GallerySection() {
  const [state, setState] = useRecoilState(aptBasicInfoState);
  const totalSize = getImageSizeHandler(state.imageSize);
  const setValue = useSetRecoilState(galleryState);

  // 디바운스된 함수를 활용해서 컴포넌트 내부의 Input Field 값이 들어있는지 파악
  const debouncedCheckState = useDebounce({
    value: checkGalleryInfo(state),
    delay: 300,
  });

  // input field에 모든 값이 들어간 경우 리코일에 boolean 값 저장
  useEffect(() => {
    if (debouncedCheckState) {
      setValue(true);
    } else {
      setValue(false);
    }
  }, [debouncedCheckState]);
  return (
    <div>
      <SectionTitle>
        <SectionTitle.Container>
          <SectionTitle.Title>단지갤러리</SectionTitle.Title>
          <SectionTitle.SubTitle>
            상품 대표 이미지, 상세페이지의 단지갤러리 등으로 사용되는
            이미지이므로 고화질 원본 이미지를 사용해 주세요.
          </SectionTitle.SubTitle>
        </SectionTitle.Container>
      </SectionTitle>
      <Tabs state={state} setState={setState}>
        <Tabs.List>
          <Tabs.Trigger text="조감도" value={1} />
          <Tabs.Trigger text="투시도" value={2} />
          <Tabs.Trigger text="단지 배치도" value={3} />
          <Tabs.Trigger text="동호수 배치도" value={4} />
          <Tabs.Trigger text="입지환경" value={5} />
          <Tab.Empty>
            <Tab.ImageFilesizeBox>
              <Tab.CurrentFileSize>
                {totalSize.toFixed(1) || 0}
              </Tab.CurrentFileSize>
              <Tab.ImageFilesize>/ </Tab.ImageFilesize>
              <Tab.ImageFilesize> {MAX_FILE_SIZE_IN_MB}MB</Tab.ImageFilesize>
            </Tab.ImageFilesizeBox>
          </Tab.Empty>
        </Tabs.List>
        <Tabs.Panel value={1}>
          <Tabs.ImagePanel category="jogamdo" />
        </Tabs.Panel>
        <Tabs.Panel value={2}>
          <Tabs.ImagePanel category="toosido" />
        </Tabs.Panel>
        <Tabs.Panel value={3}>
          <Tabs.ImagePanel category="aptLayout" />
        </Tabs.Panel>
        <Tabs.Panel value={4}>
          <Tabs.ImagePanel category="dongLayout" />
        </Tabs.Panel>
        <Tabs.Panel value={5}>
          <Tabs.ImagePanel category="environment" />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default GallerySection;
