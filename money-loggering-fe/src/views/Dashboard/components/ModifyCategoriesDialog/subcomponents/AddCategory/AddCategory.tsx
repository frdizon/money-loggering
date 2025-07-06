import { ChangeEvent, FC, useCallback, useState } from "react";
import { Container, StyledButton, StyledTextField } from "./styles";
import AddIcon from "@mui/icons-material/Add";

interface TAddCategoryProps {
  onAddCategory: (categoryName: string) => void;
  isButtonLoading: boolean;
}

const AddCategory: FC<TAddCategoryProps> = ({
  onAddCategory,
  isButtonLoading,
}) => {
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setCategoryName(e.target.value);
    },
    []
  );

  const handleAddCategory = useCallback(() => {
    onAddCategory(categoryName);
  }, [onAddCategory, categoryName]);

  return (
    <Container>
      <StyledTextField
        label="Add category"
        variant="outlined"
        size="small"
        value={categoryName}
        onChange={handleCategoryNameChange}
      />
      <StyledButton
        variant="contained"
        loading={isButtonLoading}
        startIcon={<AddIcon />}
        onClick={handleAddCategory}
        disabled={categoryName === ""}
      >
        Add
      </StyledButton>
    </Container>
  );
};

export default AddCategory;
