import React from "react";
import * as Modal from "../../style/modal/Layout.styled";
import { useResetRecoilState } from "recoil";
import { modalsState } from "../../recoil/stateModal";

interface LayoutProps {
  width: number;
  title: string;
  children: React.ReactNode;
}

function ModalLayout({ width, title, children }: LayoutProps) {
  const reset = useResetRecoilState(modalsState);
  return (
    <Modal.Wrapper onClick={(e) => e.stopPropagation()}>
      <Modal.BackDrop onClick={() => reset()} />
      <Modal.Modal $width={width}>
        <Modal.ModalInner>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content> {children}</Modal.Content>
        </Modal.ModalInner>
      </Modal.Modal>
    </Modal.Wrapper>
  );
}

export default ModalLayout;
