import { FC, useCallback, useState } from "react";
import { StyledPaper } from "./styles";
import CategoryItem from "../CategoryItem/CategoryItem";
import { TCategory } from "../../../../../../redux/categoryApi";

interface TCategoryListProps {
  categories: TCategory[];
}

const CategoryList: FC<TCategoryListProps> = ({ categories }) => {
  const [itemToEditId, setItemToEditId] = useState<undefined | number>(
    undefined
  );

  const handleEditButtonClicked = useCallback(
    (itemId: number) => () => {
      setItemToEditId(itemId);
    },
    []
  );

  const handleCancelEdit = useCallback(() => {
    setItemToEditId(undefined);
  }, []);

  return (
    <StyledPaper elevation={0}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          name={category.name}
          isEditing={category.id === itemToEditId}
          onEditClick={handleEditButtonClicked(category.id)}
          onCancelEdit={handleCancelEdit}
        />
      ))}
    </StyledPaper>
  );
};

export default CategoryList;
