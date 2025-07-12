import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FC, useCallback } from "react";
import {
  StyledDateTimePicker,
  StyledDialogContent,
  StyledSelectFormControl,
} from "./styles";
import dayjs, { Dayjs } from "dayjs";
import { THandleFormChangeEvent } from "./types";
import useAddActivity from "./utils/useAddActivity";
import { useGetCategoriesQuery } from "../../../../redux/categoryApi";

interface TAddActivityDialogProps {
  isOpen: boolean;
  onDialogClose: () => void;
}

const AddActivityDialog: FC<TAddActivityDialogProps> = ({
  isOpen,
  onDialogClose,
}) => {
  const { data: categoryData, isLoading: isLoadingCategory } =
    useGetCategoriesQuery();

  const {
    formState,
    handleFormStateUpdate,
    isLoadingPostActivity,
    onSubmit,
    errorFieldsSet,
  } = useAddActivity(onDialogClose);

  const handleFormChange = useCallback(
    (e: THandleFormChangeEvent) => {
      handleFormStateUpdate({ [e.target.name]: e.target.value });
    },
    [handleFormStateUpdate]
  );

  const handleTimestampChange = useCallback(
    (datetimeVal: Dayjs | null) => {
      handleFormStateUpdate({
        timestamp: (datetimeVal ?? dayjs()).toISOString(),
      });
    },
    [handleFormStateUpdate]
  );

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Add activity</DialogTitle>
      <StyledDialogContent>
        <StyledDateTimePicker
          label="Date and time of activity"
          value={dayjs(formState.timestamp)}
          name="timestamp"
          onChange={handleTimestampChange}
        />
        <StyledSelectFormControl style={{ width: "350px" }}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-label"
            name="category"
            value={formState.category}
            onChange={handleFormChange}
            label="Categpry"
            disabled={isLoadingCategory}
            required
            error={errorFieldsSet.has("category")}
          >
            {(categoryData ?? []).map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </StyledSelectFormControl>
        <TextField
          autoFocus
          fullWidth
          required
          label="Activity"
          name="name"
          type="text"
          variant="outlined"
          value={formState.name}
          onChange={handleFormChange}
          autoComplete="off"
          error={errorFieldsSet.has("name")}
        />
        <TextField
          autoFocus
          fullWidth
          required
          label="Amount"
          name="amount"
          type="number"
          variant="outlined"
          value={formState.amount}
          onChange={handleFormChange}
          autoComplete="off"
          error={errorFieldsSet.has("amount")}
        />
      </StyledDialogContent>
      <DialogActions>
        <Button type="submit" onClick={onDialogClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          onClick={onSubmit}
          loading={isLoadingPostActivity}
        >
          Add activity
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddActivityDialog;
