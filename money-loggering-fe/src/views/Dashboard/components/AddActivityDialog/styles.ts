import { DialogContent, FormControl } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import styled from "styled-components";

export const StyledDateTimePicker = styled(DateTimePicker)`
  width: 100%;
  margin-top: 12px;
`;

export const StyledErrorText = styled.p`
  color: red;
  margin-bottom: 0;
`;

export const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledSelectFormControl = styled(FormControl)``;
