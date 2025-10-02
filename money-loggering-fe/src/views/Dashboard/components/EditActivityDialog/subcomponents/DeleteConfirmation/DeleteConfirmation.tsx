import DialogTitle from "@mui/material/DialogTitle";
import { FC } from "react";
import { StyledDialogActions } from "../../../AddActivityDialog/styles";
import Button from "@mui/material/Button";
import { StyledDialogContent } from "./styles";

interface TDeleteConfirmationProps {
  onCancel: () => void;
  onDelete: () => void;
  isDeleteLoading: boolean;
}

const DeleteConfirmation: FC<TDeleteConfirmationProps> = ({
  onCancel,
  onDelete,
  isDeleteLoading,
}) => {
  return (
    <>
      <DialogTitle color="error">Delete activity</DialogTitle>
      <StyledDialogContent>
        <h3>Are you sure you want to delete this activity?</h3>
        <p>* Deleted activity can no longer be recovered.</p>
      </StyledDialogContent>
      <StyledDialogActions>
        <Button type="submit" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          onClick={onDelete}
          loading={isDeleteLoading}
          color="error"
        >
          Delete
        </Button>
      </StyledDialogActions>
    </>
  );
};

export default DeleteConfirmation;
