import ModalLayout from "./ModalLayout";
import { useResetRecoilState } from "recoil";
import DaumPostcode from "react-daum-postcode";
import * as Modal from "../../style/modal/AddressModal.styled";
import { useRecoilState } from "recoil";
import { modalsState } from "../../recoil/stateModal";
import { AdrressState } from "../../recoil/stateProduct";
import { AddressModalProps } from "../../types/Modal";
import { RecoilProps } from "../../types/Modal";
import { useSetRecoilState } from "recoil";
import { aptBasicInfoState } from "../../recoil/stateProduct";

function AddressSearchModal({ ...props }) {
  const setAptBaiscInfo = useSetRecoilState(aptBasicInfoState);
  const setAdrressState = useSetRecoilState(AdrressState);
  const { type } = props;
  const reset = useResetRecoilState(modalsState);

  const handleComplete = (data: any) => {
    let fullAddress = "";

    const isOldAddress = data.userSelectedType === "J";
    if (isOldAddress) {
      fullAddress = data.jibunAddress;
    } else {
      fullAddress = data.roadAddress;
    }
    setAdrressState((prev) => ({
      ...prev,
      [type]: fullAddress,
    }));
    setAptBaiscInfo((prev) => ({
      ...prev,
      [type]: fullAddress,
    }));

    reset();
  };
  return (
    <ModalLayout width={530} title="주소 검색">
      <DaumPostcode onComplete={handleComplete} />
    </ModalLayout>
  );
}

export default AddressSearchModal;
