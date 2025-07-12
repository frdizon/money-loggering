import { Dialog, DialogContent } from "@mui/material";
import { FC } from "react";
import CategoryList from "./subcomponents/CategoryList/CategoryList";
import AddCategory from "./subcomponents/AddCategory/AddCategory";
import DialogTitleWithClose from "../../../../common/components/DialogTitleWithClose/DialogTitleWithClose";
import { useGetCategoriesQuery } from "../../../../redux/categoryApi";

interface TModifyCategoriesDialogProps {
  isOpen: boolean;
  onDialogClose: () => void;
}

const ModifyCategoriesDialog: FC<TModifyCategoriesDialogProps> = ({
  isOpen,
  onDialogClose,
}) => {
  const { data } = useGetCategoriesQuery();

  return (
    <Dialog open={isOpen}>
      <DialogTitleWithClose onClose={onDialogClose}>
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
