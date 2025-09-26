import { ChangeEvent, FC, useCallback, useState } from "react";
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

interface TCategoryItemProps {
  name: string;
  isEditing: boolean;
  onEditClick: () => void;
  onCancelEdit: () => void;
}

const CategoryItem: FC<TCategoryItemProps> = ({
  name,
  isEditing,
  onEditClick,
  onCancelEdit,
}) => {
  const [editedValue, setEditedValue] = useState(name);

  const handleEditValueChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setEditedValue(evt.target.value);
    },
    []
  );

  if (isEditing) {
    return (
      <Container isExpanded>
        <TextField
          id="new-category-name-textfield"
          label="New category name"
          variant="standard"
          size="small"
          defaultValue={name}
          fullWidth
          onChange={handleEditValueChange}
        />
        <StyledRowFlexContainer gap={8}>
          <StyledButton variant="outlined" onClick={onCancelEdit}>
            Cancel
          </StyledButton>
          <StyledButton
            variant="contained"
            disabled={name === editedValue}
            onClick={() => {}}
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
        <TextContainer>{name}</TextContainer>
        <div>
          <IconButton size="small" onClick={onEditClick}>
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
