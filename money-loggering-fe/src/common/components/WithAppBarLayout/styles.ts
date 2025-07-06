import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const AppBarContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: #27272a;
  border-bottom: 1px solid black;
  padding: 0 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  height: calc(100% - 60px);
  width: 100%;
`;
