import { FC } from "react";
import Login from "./views/Login/Login";
import useUser from "./common/hooks/useUser";
import Dashboard from "./views/Dashboard/Dashboard";

export const BASE_BE_URI = import.meta.env.VITE_API_BASE_URL;

const Routing: FC = () => {
  const { isLoggedIn } = useUser();

  if (isLoggedIn) {
    return <Dashboard />;
  }
  return <Login />;
};

export default Routing;
