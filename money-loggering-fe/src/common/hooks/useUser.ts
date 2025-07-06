import { useCallback, useContext } from "react";
import { UserContext } from "../../App";

const useUser = () => {
  const userContextValue = useContext(UserContext);

  const onSetUserToken = useCallback(
    (userToken: string) => {
      if (userContextValue?.onSetUserToken) {
        userContextValue.onSetUserToken(userToken);
      }
    },
    [userContextValue]
  );

  const onClearUserToken = useCallback(() => {
    if (userContextValue?.onSetUserToken) {
      userContextValue.onSetUserToken(undefined);
    }
  }, [userContextValue]);

  const isLoggedIn =
    userContextValue?.userToken && userContextValue.userToken !== undefined;

  return {
    userToken: userContextValue?.userToken ?? undefined,
    onSetUserToken,
    onClearUserToken,
    isLoggedIn,
  };
};

export default useUser;
