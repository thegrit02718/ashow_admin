import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 0;
  margin-bottom: 24px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.SectionTitleBolrder};
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.GreyScale1};
  font-weight: 600;
`;

export const SubTitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.GreyScale1};
`;

export const Container = styled.div`
  display: flex;
  gap: 0 10px;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  gap: 0 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.GreyScale1};
  font-weight: 600;
`;
