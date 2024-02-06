import React from "react";
import * as Enroll from "../../../../style/buildings/AptEnrollment.styled";
import { useRecoilState } from "recoil";
import { aptPyeongInfoState } from "../../../../recoil/stateProduct";
import { modalsState } from "../../../../recoil/stateModal";

interface Props {
  index: number;
  toggle: () => void;
}

function ManagementDropDown({ index, toggle }: Props) {
  const [aptState, setAptState] = useRecoilState(aptPyeongInfoState);
  const [modalState, setModalState] = useRecoilState(modalsState);

  const modifyObject = aptState.total[index];
  const deleteEventHandler = (value: number) => {
    setAptState((prev) => ({
      ...prev,
      total: (prev.total || []).filter((_, index) => {
        return value !== index;
      }),
    }));
    toggle();
  };
  const modifyEventHandler = (value: number) => {
    setModalState((prev) => ({
      ...prev,
      isOpen: true,
      modalType: "AptInfo",
      props: { mode: "modify", modifyObject, modalIndex: index },
    }));
    setAptState((prev: any) => ({
      ...prev,
      default: {
        mainType: modifyObject.mainType,
        pyengName: modifyObject.pyengName,
        houseHold: modifyObject.houseHold,
        officialArea: modifyObject.officialArea,
        personalArea: modifyObject.personalArea,
        priceDefaultLow: modifyObject.priceDefaultLow,
        priceDefaultHigh: modifyObject.priceDefaultHigh,
        discountLow: modifyObject.discountLow,
        discountHigh: modifyObject.discountHigh,
        ashowDiscountGriting: modifyObject.ashowDiscountGriting,
        ashowDiscountFirstUse: modifyObject.ashowDiscountFirstUse,
        ashowDiscountMember: modifyObject.ashowDiscountMember,
        ashowDiscountToday: modifyObject.ashowDiscountToday,
        keyColor: modifyObject.keyColor,
        minusOption: modifyObject.minusOption,
        extendOption: modifyObject.extendOption,
        explanation: modifyObject.explanation,
        floorPlanView: modifyObject.floorPlanView,
        floorPlanDetailView: modifyObject.floorPlanDetailView,
        floorPlan: modifyObject.floorPlan,
        floorPlanDetail: modifyObject.floorPlanDetail,
      },
    }));
    toggle();
  };

  return (
    <Enroll.DropDown>
      <Enroll.DropDownList onClick={() => modifyEventHandler(index)}>
        <Enroll.ModifyIcon />
        <Enroll.DropDownText>수정</Enroll.DropDownText>
      </Enroll.DropDownList>
      <Enroll.DropDownList onClick={() => deleteEventHandler(index)}>
        <Enroll.DeleteIcon />
        <Enroll.DropDownText>삭제</Enroll.DropDownText>
      </Enroll.DropDownList>
    </Enroll.DropDown>
  );
}

export default ManagementDropDown;
