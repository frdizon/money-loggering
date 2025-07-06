import { FC, ReactNode } from "react";
import { AppBarContainer, Container, ContentContainer } from "./styles";
import { Button } from "@mui/material";
import useUser from "../../hooks/useUser";

interface TWithAppBarLayoutProps {
  menuComponent?: ReactNode;
  children: ReactNode;
}

const WithAppBarLayout: FC<TWithAppBarLayoutProps> = ({
  menuComponent = <div />,
  children,
}) => {
  const { onClearUserToken } = useUser();

  return (
    <Container>
      <AppBarContainer>
        {menuComponent}
        <Button type="submit" variant="outlined" onClick={onClearUserToken}>
          Logout
        </Button>
      </AppBarContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default WithAppBarLayout;
