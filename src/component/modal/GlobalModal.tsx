import React from "react";
import { modalsState } from "../../recoil/stateModal";
import { useResetRecoilState, useRecoilValue } from "recoil";
import AddressSearchModal from "./AddressSearchModal";
import AptInfoModal from "./AptInfoModal";
import FacilityRegModal from "./FacilityRegModal";

const GlobalModal = () => {
  const { isOpen, modalType, props } = useRecoilValue(modalsState);

  if (!isOpen) return null;

  const MODAL_COMPONENTS: { [key: string]: JSX.Element } = {
    AddressSearch: <AddressSearchModal {...props} />,
    AptInfo: <AptInfoModal {...props} />,
    FacilityReg: <FacilityRegModal {...props} />,
    // ... (다른 모달 컴포넌트 정의)
  };

  return <div>{MODAL_COMPONENTS[modalType]}</div>;
};

export default GlobalModal;
