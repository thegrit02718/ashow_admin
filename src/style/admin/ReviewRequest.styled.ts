import styled from "styled-components";

export const Container = styled.main`
  padding: 25px;
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Section = styled.div`
  min-height: 100%;
  background: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px 0;
`;

export const ConfirmBtn = styled.button``;
