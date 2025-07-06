import { FC, useCallback, useState } from "react";
import { Container } from "./styles";
import { TShownDashboardDialog } from "../../types";
import { Button, Menu, MenuItem } from "@mui/material";

interface IAppbarButtonsProps {
  onButtonClick: (value: TShownDashboardDialog) => void;
}

const AppbarButtons: FC<IAppbarButtonsProps> = ({ onButtonClick }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickMenuButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = useCallback(
    (value: TShownDashboardDialog) => () => {
      onButtonClick(value);
    },
    [onButtonClick]
  );

  return (
    <Container>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        onClick={handleClickMenuButton}
      >
        Data Configuration
      </Button>
      <Button variant="outlined" onClick={handleButtonClick("add-activity")}>
        Add Activity
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        <MenuItem disabled onClick={handleButtonClick("modify-query")}>
          Modify query
        </MenuItem>
        <MenuItem onClick={handleButtonClick("modify-categories")}>
          Modify categories
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default AppbarButtons;
