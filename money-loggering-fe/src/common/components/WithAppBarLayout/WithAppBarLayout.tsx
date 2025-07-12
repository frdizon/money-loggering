import { FC, ReactNode, useCallback } from "react";
import { AppBarContainer, Container, ContentContainer } from "./styles";
import { Button } from "@mui/material";
import useAppDispatch from "../../hooks/useAppDispatch";
import { clear } from "../../../redux/authTokenSlice";

interface TWithAppBarLayoutProps {
  menuComponent?: ReactNode;
  children: ReactNode;
}

const WithAppBarLayout: FC<TWithAppBarLayoutProps> = ({
  menuComponent = <div />,
  children,
}) => {
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(clear());
  }, [dispatch]);

  return (
    <Container>
      <AppBarContainer>
        {menuComponent}
        <Button type="submit" variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      </AppBarContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default WithAppBarLayout;
