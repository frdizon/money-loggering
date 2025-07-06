import { Dialog, DialogContent } from "@mui/material";
import { FC, useCallback } from "react";
import CategoryList from "./subcomponents/CategoryList/CategoryList";
import AddCategory from "./subcomponents/AddCategory/AddCategory";
import DialogTitleWithClose from "../../../../common/components/DialogTitleWithClose/DialogTitleWithClose";
import useGetCategoriesApi from "../AddActivityDialog/utils/useGetCategoriesApi";
import usePostCategoryApi from "../../utils/usePostCategoryApi";

interface TModifyCategoriesDialogProps {
  isOpen: boolean;
  onDialogClose: () => void;
}

const ModifyCategoriesDialog: FC<TModifyCategoriesDialogProps> = ({
  isOpen,
  onDialogClose,
}) => {
  const { data, handleGetCategoryApi } = useGetCategoriesApi();
  const { isLoading: isPostApiLoading, handlePostCategory } =
    usePostCategoryApi();

  const handleAddCategoryClick = useCallback(
    (categoryName: string) =>
      handlePostCategory(categoryName, handleGetCategoryApi),
    [handlePostCategory, handleGetCategoryApi]
  );

  return (
    <Dialog open={isOpen}>
      <DialogTitleWithClose onClose={onDialogClose}>
        Categories
      </DialogTitleWithClose>
      <DialogContent>
        <CategoryList categories={data} />
        <AddCategory
          onAddCategory={handleAddCategoryClick}
          isButtonLoading={isPostApiLoading}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModifyCategoriesDialog;
