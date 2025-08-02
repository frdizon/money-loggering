import { FC, useCallback } from "react";
import { Container } from "./styles";
import { TShownDashboardDialog } from "../../types";
import { Button } from "@mui/material";
import DataConfigButton from "./subcomponents/DataConfigButton/DataConfigButton";

interface IAppbarButtonsProps {
  onButtonClick: (value: TShownDashboardDialog) => void;
}

const AppbarButtons: FC<IAppbarButtonsProps> = ({ onButtonClick }) => {
  const handleButtonClick = useCallback(
    (value: TShownDashboardDialog) => () => {
      onButtonClick(value);
    },
    [onButtonClick]
  );

  return (
    <Container>
      <DataConfigButton onButtonClick={handleButtonClick} />
      <Button variant="outlined" onClick={handleButtonClick("add-activity")}>
        Add Activity
      </Button>
    </Container>
  );
};

export default AppbarButtons;
