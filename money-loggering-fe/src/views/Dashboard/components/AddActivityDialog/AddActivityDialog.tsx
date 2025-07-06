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
import useFormState from "../../../../common/hooks/useFormState";
import { TActivity } from "../../types";
import initializeActivityFormState from "./utils/initializeActivityFormState";
import dayjs, { Dayjs } from "dayjs";
import useGetCategoriesApi from "./utils/useGetCategoriesApi";
import { THandleFormChangeEvent } from "./types";
import usePostActivityApi from "./utils/usePostActivityApi";

interface TAddActivityDialogProps {
  isOpen: boolean;
  onDialogClose: () => void;
  handleSuccess: () => void;
}

const AddActivityDialog: FC<TAddActivityDialogProps> = ({
  isOpen,
  onDialogClose,
  handleSuccess,
}) => {
  const { data: categoryData, isLoading: isLoadingCategory } =
    useGetCategoriesApi();

  const { isLoading: isLoadingPostCategory, postActivity } =
    usePostActivityApi();

  const { formState, handleFormStateUpdate } = useFormState<
    Omit<TActivity, "id">
  >(initializeActivityFormState);

  const handleAddActivity = useCallback(() => {
    postActivity(formState).finally(() => {
      handleSuccess();
      onDialogClose();
    });
  }, [postActivity, formState, handleSuccess, onDialogClose]);

  const handleFormChange = useCallback(
    (e: THandleFormChangeEvent) => {
      handleFormStateUpdate({ [e.target.name]: e.target.value });
    },
    [handleFormStateUpdate]
  );

  const handleTimestampChange = useCallback(
    (datetimeVal: Dayjs | null) => {
      handleFormStateUpdate({ timestamp: datetimeVal ?? dayjs() });
    },
    [handleFormStateUpdate]
  );

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Add activity</DialogTitle>
      <StyledDialogContent>
        <StyledDateTimePicker
          label="Date and time of activity"
          value={formState.timestamp}
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
          >
            {categoryData.map((category) => (
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
        />
      </StyledDialogContent>
      <DialogActions>
        <Button type="submit" onClick={onDialogClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          onClick={handleAddActivity}
          loading={isLoadingPostCategory}
        >
          Add activity
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddActivityDialog;
