import React, { useState } from "react";
import { AptTypes } from "../../types/Tabletype";
import * as Building from "../../style/buildings/Building.styled";
import { FaCheck } from "react-icons/fa6";
import Checkbox from "./CheckBox";
import theme from "../../style/theme";
import { CheckboxGroup } from "./CheckboxGroup";

interface TableProps {
  data: AptTypes[];
}

function Table({ data }: TableProps) {
  const [selectedList, setSelectedList] = useState<number[]>([]);
  console.log(selectedList);
  return (
    <Building.TableWrapper>
      <Building.Table style={{ borderCollapse: "collapse" }}>
        <thead>
          <Building.Tr>
            <Building.Th>
              <FaCheck size={15} />
            </Building.Th>
            <Building.Th>상태</Building.Th>
            <Building.Th>매물번호</Building.Th>
            <Building.Th>사진</Building.Th>
            <Building.Th>주소</Building.Th>
            <Building.Th>소유자</Building.Th>
            <Building.Th>등록일자</Building.Th>
            <Building.Th>관리</Building.Th>
          </Building.Tr>
        </thead>
        <tbody>
          <CheckboxGroup values={selectedList} onChange={setSelectedList}>
            {data.map((item, rowIndex) => {
              return (
                <Building.Tr key={rowIndex}>
                  <Building.Td>
                    <Checkbox value={item.aptKey} onChange={setSelectedList} />
                  </Building.Td>
                  <Building.Td>
                    <Building.StatusBtn type="button">보기</Building.StatusBtn>
                  </Building.Td>
                  <Building.Td>{item.aptKey}</Building.Td>
                  <Building.Td>
                    <Building.AptImage src={item.image} alt="매물 이미지" />
                  </Building.Td>
                  <Building.Td>
                    {item.addressCity +
                      " " +
                      item.addressCounty +
                      " " +
                      item.addressRest +
                      " " +
                      item.promotionSite}
                  </Building.Td>
                  <Building.Td>{item.constructorCompany}</Building.Td>
                  <Building.Td>{item.updatedDate}</Building.Td>
                  <Building.Td>
                    <Building.FlexBox>
                      <Building.ManageBox type="button">
                        수정
                      </Building.ManageBox>
                      <Building.ManageBox type="button">
                        구매완료
                      </Building.ManageBox>
                    </Building.FlexBox>
                  </Building.Td>
                </Building.Tr>
              );
            })}
          </CheckboxGroup>
        </tbody>
      </Building.Table>
    </Building.TableWrapper>
  );
}

export default Table;
