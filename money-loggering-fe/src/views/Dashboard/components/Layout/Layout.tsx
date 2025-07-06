import { FC, ReactNode } from "react";
import { Container, GraphPaneContainer, TablePaneContainer } from "./styles";

export interface TDashboardLayoutProps {
  graphComponent: ReactNode;
  tableComponent: ReactNode;
}

const DashboardLayout: FC<TDashboardLayoutProps> = ({
  graphComponent,
  tableComponent,
}) => {
  return (
    <Container>
      <GraphPaneContainer>{graphComponent}</GraphPaneContainer>
      <TablePaneContainer>{tableComponent}</TablePaneContainer>
    </Container>
  );
};

export default DashboardLayout;
