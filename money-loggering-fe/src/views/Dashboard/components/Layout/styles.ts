import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 40% 60%;
  grid-template-columns: 100%;

  > div {
    padding: 8px;
    @media (max-width: 768px) {
      padding: 8px 0;
      border-radius: 0;
    }
  }
`;

export const GraphPaneContainer = styled.div``;

export const TablePaneContainer = styled.div``;
