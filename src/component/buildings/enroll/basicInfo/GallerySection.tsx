import React from "react";
import { ComponentProps } from "../../../../types/types";
import * as Tab from "../../../../style/component/tab/Tabs.styled";
import Tabs from "../../../molecule/Tabs";
import EnrollImagePanel from "./EnrollImagePanel";
import SectionTitle from "../../../molecule/SectionTitle";

import {
  getImageSizeHandler,
  MAX_FILE_SIZE_IN_MB,
} from "../../../../util/fileUtils";

function GallerySection({ state, dispatch }: ComponentProps) {
  const totalSize = getImageSizeHandler(state.imageSize);

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
      <Tabs defaultValue={1}>
        <Tabs.List>
          <Tabs.Trigger text="조감도/투시도" value={1} />
          <Tabs.Trigger text="단지 배치도" value={2} />
          <Tabs.Trigger text="동호수 배치도" value={3} />
          <Tabs.Trigger text="기타" value={4} />
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
          <EnrollImagePanel
            dispatch={dispatch}
            state={state}
            category="jogamdo"
          />
        </Tabs.Panel>
        <Tabs.Panel value={2}>
          <EnrollImagePanel
            dispatch={dispatch}
            state={state}
            category="aptLayout"
          />
        </Tabs.Panel>
        <Tabs.Panel value={3}>
          <EnrollImagePanel
            dispatch={dispatch}
            state={state}
            category="dongLayout"
          />
        </Tabs.Panel>
        <Tabs.Panel value={4}>
          <EnrollImagePanel dispatch={dispatch} state={state} category="etc" />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default GallerySection;
