import React from "react";
import * as Enroll from "../../../../style/buildings/AptEnrollment.styled";
import { useRecoilState } from "recoil";
import { AptState } from "../../../../recoil/stateProduct";
import { modalsState } from "../../../../recoil/stateModal";
import { State } from "../../../../reducer/aptPyeongInfoReducer";
import { PyeongModalProps } from "../../../../types/Modal";

interface Props {
  index: number;
  toggle: () => void;
}

function ManagementDropDown({ index, toggle }: Props) {
  const [aptState, setAptState] = useRecoilState(AptState);
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
      modalType: "AptInfoModal",
      props: { mode: "modify", modifyObject, modalIndex: index },
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
