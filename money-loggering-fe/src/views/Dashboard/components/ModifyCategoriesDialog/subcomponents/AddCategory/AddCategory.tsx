import { ChangeEvent, FC, useCallback } from "react";
import { Container, StyledButton, StyledTextField } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import useAddCategory from "../../utils/useAddCategory";
import { TEXT_INPUT_CATEGORY_SLOT_PROPS } from "../../../../constants";

const AddCategory: FC = () => {
  const { isLoadingPostCategory, formState, handleFormStateUpdate, onSubmit } =
    useAddCategory();

  const handleFormChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      handleFormStateUpdate({ [e.target.name]: e.target.value });
    },
    [handleFormStateUpdate]
  );

  return (
    <Container>
      <StyledTextField
        label="Add category"
        variant="outlined"
        size="small"
        name="name"
        value={formState.name}
        onChange={handleFormChange}
        slotProps={TEXT_INPUT_CATEGORY_SLOT_PROPS}
      />
      <StyledButton
        variant="contained"
        loading={isLoadingPostCategory}
        startIcon={<AddIcon />}
        onClick={onSubmit}
        disabled={formState.name === ""}
      >
        Add
      </StyledButton>
    </Container>
  );
};

export default AddCategory;
