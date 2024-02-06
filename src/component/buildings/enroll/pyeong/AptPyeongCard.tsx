import React, { useState } from "react";
import * as Enroll from "../../../../style/buildings/AptEnrollment.styled";
import ManagementDropDown from "./ManagementDropDown";
import { PyeongItem } from "../../../../types/types";
import Checkbox from "../../../CheckBox";
import {
  aptPyeongInfoState,
  pyengCheckState,
} from "../../../../recoil/stateProduct";
import { useRecoilState } from "recoil";

interface AptInfoCardProps {
  state: PyeongItem;
  index: number;
  toggleIndex: number;
  event: () => void;
}

function AptInfoCard({ state, index, toggleIndex, event }: AptInfoCardProps) {
  const [checkState, setCheckState] = useRecoilState(pyengCheckState);
  const [pyengState, setPyengState] = useRecoilState(aptPyeongInfoState);
  const toggleEventhandler = (index: number) => {
    setCheckState((prev) => ({
      ...prev,
      toggleIndex: prev.toggleIndex === index ? -1 : index,
    }));
  };
  const clickEventHandler = (idx: number) => {
    setCheckState((prev) => ({ ...prev, checkedIndex: idx }));
    setPyengState((prev) => {
      const updatedTotal = prev.total.map((item, i) => ({
        ...item,
        mainType: i === index,
      }));

      return { ...prev, total: updatedTotal };
    });
  };
  return (
    <Enroll.Tr>
      <Enroll.Td>
        <Enroll.TextContainer>
          <Enroll.Label htmlFor="check">
            <input
              type="checkbox"
              checked={checkState.checkedIndex == index}
              onChange={() => console.log(toggleIndex + 1)}
              hidden
            />
            <Enroll.CheckBox
              id="check"
              onClick={() => {
                clickEventHandler(index);
              }}
            >
              {checkState.checkedIndex == index ? (
                <Enroll.Checked />
              ) : (
                <Enroll.Unchecked />
              )}
            </Enroll.CheckBox>
          </Enroll.Label>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>{state.pyengName}</Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.houseHold}
          <Enroll.Unit>가구</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.officialArea} <Enroll.Unit>㎡</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.personalArea} <Enroll.Unit>㎡</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.priceDefaultLow}
          <Enroll.Unit>만원</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.priceDefaultHigh}
          <Enroll.Unit>만원</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.discountLow}
          <Enroll.Unit>만원</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.discountHigh}
          <Enroll.Unit>만원</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.ashowDiscountGriting}
          <Enroll.Unit>만원</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.ashowDiscountFirstUse}
          <Enroll.Unit>만원</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.ashowDiscountMember}
          <Enroll.Unit>만원</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.ashowDiscountToday}
          <Enroll.Unit>만원</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.minusOption}
          <Enroll.Unit>만원</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.extendOption}
          <Enroll.Unit>만원</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.ManageIcon onClick={() => toggleEventhandler(index)} />
        {checkState.toggleIndex == index && (
          <ManagementDropDown
            index={index}
            toggle={() => toggleEventhandler(index)}
          />
        )}
      </Enroll.Td>
    </Enroll.Tr>
  );
}

export default AptInfoCard;
