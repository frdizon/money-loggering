import { Dialog, DialogContent } from "@mui/material";
import { FC, useCallback } from "react";
import CategoryList from "./subcomponents/CategoryList/CategoryList";
import AddCategory from "./subcomponents/AddCategory/AddCategory";
import DialogTitleWithClose from "../../../../common/components/DialogTitleWithClose/DialogTitleWithClose";
import { useGetCategoriesQuery } from "../../../../redux/categoryApi";
import { useDispatch } from "react-redux";
import { activityApi } from "../../../../redux/activityApi";

interface TModifyCategoriesDialogProps {
  isOpen: boolean;
  onDialogClose: () => void;
}

const ModifyCategoriesDialog: FC<TModifyCategoriesDialogProps> = ({
  isOpen,
  onDialogClose,
}) => {
  const { data } = useGetCategoriesQuery();
  const dispatch = useDispatch();

  const handleCloseDialog = useCallback(() => {
    // TODO: Only invalidateTags when an edit has been made
    dispatch(activityApi.util.invalidateTags(["activity"]));
    onDialogClose();
  }, [dispatch, onDialogClose]);

  return (
    <Dialog open={isOpen}>
      <DialogTitleWithClose onClose={handleCloseDialog}>
        Categories
      </DialogTitleWithClose>
      <DialogContent>
        <CategoryList categories={data ?? []} />
        <AddCategory />
      </DialogContent>
    </Dialog>
  );
};

export default ModifyCategoriesDialog;
