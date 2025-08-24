import styled from "styled-components";

export const Container = styled.div`
  padding: 8px 0;
`;

export const RowHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;

  font-size: 14px;
  color: gray;
`;

export const RowBodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NameContainer = styled.div`
  height: fit-content;
  max-height: 48px;
`;

export const AmountContainer = styled.div`
  height: 48px;
  max-height: 48px;
  color: red;
  line-height: 48px;
  font-size: 22px;
  font-weight: 500;
`;
