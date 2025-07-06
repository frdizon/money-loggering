import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const StyledTextField = styled(TextField)`
  flex: 1;
`;

export const StyledButton = styled(Button)`
  height: 40px;
`;
