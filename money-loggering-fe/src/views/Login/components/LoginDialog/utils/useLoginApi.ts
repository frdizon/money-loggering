import { useState } from "react";
import useUser from "../../../../../common/hooks/useUser";
import { BASE_BE_URI } from "../../../../../Routing";
import { IUser } from "../../../types";

const useLoginApi = () => {
  const { onSetUserToken } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = (user: IUser) => {
    setIsLoading(true);
    fetch(`${BASE_BE_URI}/account/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        response
          .text()
          .then((textResponse) => {
            onSetUserToken(textResponse);
          })
          .catch(() => {
            alert("Authorization Error Occured.");
          });
      })
      .catch((response) => {
        console.log(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    onLogin,
    isLoading,
  };
};

export default useLoginApi;
