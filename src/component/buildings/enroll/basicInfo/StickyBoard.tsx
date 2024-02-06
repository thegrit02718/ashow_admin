import React, { useState } from "react";
import * as Board from "../../../../style/buildings/StickyBoard.styled";
import useCountUp from "../../../../hooks/useCountup";
import { useRecoilValue } from "recoil";
import { sectionStatus } from "../../../../recoil/selector";
interface StickyBoardProps {
  paging: number;
}

function StickyBoard({ paging }: StickyBoardProps) {
  const { progress, productInfo, gallery, community, promotion } =
    useRecoilValue(sectionStatus);
  const count = useCountUp(progress);

  const orderList = [
    {
      title: "기본정보 입력",
      orderList: [
        {
          title: "건물정보",
          isComplete: productInfo,
        },
        {
          title: "단지갤러리",
          isComplete: gallery,
        },
        {
          title: "커뮤니티 시설",
          isComplete: community,
        },
        {
          title: "홍보관 정보",
          isComplete: promotion,
        },
      ],
      page: 1,
    },
    {
      title: "세대정보 입력",
      orderList: [],
      page: 2,
    },
  ];

  return (
    <Board.StickyBoard>
      <Board.StickyBoardInner>
        <Board.ProgressConatainer>
          <Board.ProgressInfo>
            <Board.ProgressTitle>매물등록 진행률</Board.ProgressTitle>
            <Board.StatusLabel>{count}%</Board.StatusLabel>
          </Board.ProgressInfo>
          <Board.ProgressBar>
            <Board.ProgressFill $percent={count} />
          </Board.ProgressBar>
        </Board.ProgressConatainer>
        <Board.Guidance>
          {orderList.map((list, index) => {
            return (
              <Board.Section $isActive={paging === list.page} key={index}>
                <Board.TitleBox>
                  <Board.CheckIcon $isActive={paging >= list.page} />
                  <Board.GuidanceTitle $isActive={paging >= list.page}>
                    STEP {index + 1}. {list.title}
                  </Board.GuidanceTitle>
                </Board.TitleBox>
                <Board.ListContainer>
                  {list.orderList.map((item, idx) => {
                    return (
                      <Board.List $isActive={paging >= list.page} key={idx}>
                        <Board.Title $isActive={item.isComplete} key={idx}>
                          {item.title}
                        </Board.Title>
                        <Board.CheckIcon $isActive={item.isComplete} />
                      </Board.List>
                    );
                  })}
                </Board.ListContainer>
              </Board.Section>
            );
          })}
        </Board.Guidance>
      </Board.StickyBoardInner>
    </Board.StickyBoard>
  );
}

export default StickyBoard;
