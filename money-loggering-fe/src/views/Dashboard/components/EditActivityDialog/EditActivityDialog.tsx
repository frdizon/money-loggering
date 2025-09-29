import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FC, useCallback } from "react";
import {
  StyledDateTimePicker,
  StyledDialogActions,
  StyledDialogContent,
} from "../AddActivityDialog/styles";
import dayjs, { Dayjs } from "dayjs";
import { useGetCategoriesQuery } from "../../../../redux/categoryApi";
import { TActivity } from "../../../../redux/activityApi";
import useEditActivity from "./utils/useEditActivity";
import { THandleFormChangeEvent } from "../AddActivityDialog/types";
import { TEXT_INPUT_ACTIVITY_SLOT_PROPS } from "../../constants";

interface TEditActivityDialogProps {
  isOpen: boolean;
  onDialogClose: () => void;
  activity: TActivity;
}

const EditActivityDialog: FC<TEditActivityDialogProps> = ({
  isOpen,
  onDialogClose,
  activity,
}) => {
  const { data: categoryData, isLoading: isLoadingCategory } =
    useGetCategoriesQuery();

  const {
    formState,
    handleFormStateUpdate,
    isLoadingPutActivity,
    onSubmit,
    errorFieldsSet,
  } = useEditActivity(activity);

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

  const handleSaveClick = useCallback(() => {
    onSubmit()?.then(() => {
      onDialogClose();
    });
  }, [onDialogClose, onSubmit]);

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Edit activity</DialogTitle>
      <StyledDialogContent>
        <StyledDateTimePicker
          label="Date and time of activity"
          value={dayjs(formState.timestamp)}
          name="timestamp"
          onChange={handleTimestampChange}
        />
        <FormControl>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-label"
            name="categoryid"
            value={formState.categoryid}
            onChange={handleFormChange}
            label="Category"
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
        </FormControl>
        <TextField
          autoFocus
          fullWidth
          required
          label="Activity"
          name="name"
          type="text"
          variant="outlined"
          value={formState.name}
          slotProps={TEXT_INPUT_ACTIVITY_SLOT_PROPS}
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
      <StyledDialogActions>
        <Button type="submit" onClick={onDialogClose}>
          Delete
        </Button>
        <Button type="submit" onClick={onDialogClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          onClick={handleSaveClick}
          loading={isLoadingPutActivity}
        >
          Save
        </Button>
      </StyledDialogActions>
    </Dialog>
  );
};

export default EditActivityDialog;
