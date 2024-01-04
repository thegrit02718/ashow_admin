import React from "react";
import * as Enroll from "../../../../style/buildings/AptEnrollment.styled";
import ManagementDropDown from "./ManagementDropDown";
import { PyeongModalProps } from "../../../../types/Modal";

interface AptInfoCardProps {
  state: PyeongModalProps;
  index: number;
  toggleIndex: number;
  event: () => void;
}

function AptInfoCard({ state, index, toggleIndex, event }: AptInfoCardProps) {
  return (
    <Enroll.Tr>
      <Enroll.Td>
        <Enroll.TextContainer>{state.pyeong}</Enroll.TextContainer>
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
          {state.priceDefault}
          <Enroll.Unit>만원</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.TextContainer>
          {state.discountDefault}
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
        <Enroll.TextContainer>
          {state.minusOption}
          <Enroll.Unit>만원</Enroll.Unit>
        </Enroll.TextContainer>
      </Enroll.Td>
      <Enroll.Td>
        <Enroll.ManageIcon onClick={event} />
        {toggleIndex == index && (
          <ManagementDropDown index={index} toggle={event} />
        )}
      </Enroll.Td>
    </Enroll.Tr>
  );
}

export default AptInfoCard;
