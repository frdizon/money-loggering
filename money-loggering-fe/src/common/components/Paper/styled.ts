import { Paper as MuiPaper } from "@mui/material";
import styled from "styled-components";

const Paper = styled(MuiPaper)`
  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

export default Paper;
