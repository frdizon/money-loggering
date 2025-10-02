import { ChangeEvent, FC, useCallback } from "react";
import {
  Container,
  StyledButton,
  StyledRowFlexContainer,
  TextContainer,
} from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { TCategory } from "../../../../../../redux/categoryApi";
import usePostCategory from "../../utils/usePostCategory";
import { TEXT_INPUT_CATEGORY_SLOT_PROPS } from "../../../../constants";

interface TCategoryItemProps {
  category: TCategory;
  isEditing: boolean;
  /** Callback function to expand/show the edit view */
  onExpandEditView: () => void;
  /** Callback function to collapse/hide the edit view */
  onCollapseEditView: () => void;
}

const CategoryItem: FC<TCategoryItemProps> = ({
  category,
  isEditing,
  onExpandEditView,
  onCollapseEditView,
}) => {
  const { formState, handleFormStateUpdate, isLoadingPutCategory, onSubmit } =
    usePostCategory(category);

  const handleEditValueChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      handleFormStateUpdate({ name: evt.target.value });
    },
    [handleFormStateUpdate]
  );

  const handleEditSave = useCallback(() => {
    onSubmit()?.then(() => {
      onCollapseEditView();
    });
  }, [onCollapseEditView, onSubmit]);

  if (isEditing) {
    return (
      <Container isExpanded>
        <TextField
          id="new-category-name-textfield"
          label="New category name"
          variant="standard"
          size="small"
          defaultValue={category.name}
          fullWidth
          onChange={handleEditValueChange}
          slotProps={TEXT_INPUT_CATEGORY_SLOT_PROPS}
        />
        <StyledRowFlexContainer gap={8}>
          <StyledButton variant="outlined" onClick={onCollapseEditView}>
            Cancel
          </StyledButton>
          <StyledButton
            variant="contained"
            disabled={category.name === formState.name}
            loading={isLoadingPutCategory}
            onClick={handleEditSave}
          >
            Save
          </StyledButton>
        </StyledRowFlexContainer>
      </Container>
    );
  }

  // Default view:
  return (
    <Container>
      <StyledRowFlexContainer>
        <TextContainer>{category.name}</TextContainer>
        <div>
          <IconButton size="small" onClick={onExpandEditView}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" disabled>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      </StyledRowFlexContainer>
    </Container>
  );
};

export default CategoryItem;
