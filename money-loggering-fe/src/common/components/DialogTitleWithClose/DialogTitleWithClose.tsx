import { FC, ReactNode } from "react";
import { Container } from "./styles";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface TDialogTitleWithCloseProps {
  onClose: () => void;
  children: ReactNode;
}

const DialogTitleWithClose: FC<TDialogTitleWithCloseProps> = ({
  onClose,
  children,
}) => {
  return (
    <Container>
      {children}
      <IconButton aria-label="close" onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </Container>
  );
};

export default DialogTitleWithClose;
