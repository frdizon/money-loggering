import { Paper } from "@mui/material";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export const TableRowBaseContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 48px;

  > div:nth-child(1) {
    flex: 1;
  }
  > div:nth-child(2) {
    flex: 1;
  }
  > div:nth-child(3) {
    flex: 2;
  }
  > div:nth-child(4) {
    flex: 1;
  }
`;
