import styled from "styled-components";
import Paper from "../../../../../common/components/Paper/styled";

export const StyledPaper = styled(Paper)`
  height: 100%;
  width: 100%;
  overflow: auto;
  > div:not(:last-child) {
    border-bottom: 1px solid white;
  }
  padding: 0 8px 8px;
`;
