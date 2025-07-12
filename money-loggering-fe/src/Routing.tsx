import { FC } from "react";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import { selectAuthToken } from "./redux/authTokenSlice";
import useAppSelector from "./common/hooks/useAppSelector";

export const BASE_BE_URI = import.meta.env.VITE_API_BASE_URL;
export const BASE_BE_API_URL = import.meta.env.VITE_API_BASE_API_URL;

const Routing: FC = () => {
  const authToken = useAppSelector(selectAuthToken);
  const isLoggedIn = authToken !== "";

  if (isLoggedIn) {
    return <Dashboard />;
  }
  return <Login />;
};

export default Routing;
