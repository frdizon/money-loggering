import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { FC, useState } from "react";
import ResponsiveWrapper from "../../../../../../common/components/ResponsiveWrapper/ResponsiveWrapper";
import MenuIcon from "@mui/icons-material/Menu";
import { TShownDashboardDialog } from "../../../../types";

interface TDataConfigButtonProps {
  onButtonClick: (shownDialog: TShownDashboardDialog) => () => void;
}

const DataConfigButton: FC<TDataConfigButtonProps> = ({ onButtonClick }) => {
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

  return (
    <>
      <ResponsiveWrapper
        standardComponent={
          <Button
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="outlined"
            onClick={handleClickMenuButton}
          >
            Data Configuration
          </Button>
        }
        mobileComponent={
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClickMenuButton}
          >
            <MenuIcon />
          </IconButton>
        }
      ></ResponsiveWrapper>
      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        <MenuItem disabled onClick={onButtonClick("modify-query")}>
          Modify query
        </MenuItem>
        <MenuItem onClick={onButtonClick("modify-categories")}>
          Modify categories
        </MenuItem>
      </Menu>
    </>
  );
};

export default DataConfigButton;
