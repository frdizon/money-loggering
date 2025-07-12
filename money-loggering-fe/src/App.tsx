import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, FC, useCallback, useState } from "react";
import Routing from "./Routing";
import { IUserContextValue, TUserToken } from "./types";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { store } from "./store";
import { Provider } from "react-redux";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const UserContext = createContext<IUserContextValue | null>(null);

const App: FC = () => {
  const [userToken, setUserToken] = useState<TUserToken>(undefined);

  const onSetUserToken = useCallback((id: TUserToken) => {
    setUserToken(id);
  }, []);

  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={darkTheme}>
          <UserContext value={{ userToken, onSetUserToken }}>
            <Routing />
          </UserContext>
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  );
};

export default App;
