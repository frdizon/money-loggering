import { FC } from "react";
import { Container } from "./styles";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface TCategoryItemProps {
  name: string;
}

const CategoryItem: FC<TCategoryItemProps> = ({ name }) => {
  return (
    <Container>
      {name}
      <div>
        <IconButton size="small" disabled>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" disabled>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </Container>
  );
};

export default CategoryItem;
