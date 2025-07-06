import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { FC } from "react";

interface TModifyQueryDialogProps {
  isOpen: boolean;
  onDialogClose: () => void;
}

const ModifyQueryDialog: FC<TModifyQueryDialogProps> = ({
  isOpen,
  onDialogClose,
}) => {
  return (
    <Dialog open={isOpen}>
      <DialogTitle>Query</DialogTitle>
      <DialogActions>
        <Button type="submit" onClick={onDialogClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          onClick={() => {}}
          //   loading={isLoadingPostCategory}
        >
          Add activity
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModifyQueryDialog;
