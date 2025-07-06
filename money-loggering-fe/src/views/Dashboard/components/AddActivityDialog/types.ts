import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";

export type THandleFormChangeEvent =
  | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | SelectChangeEvent<string>;
