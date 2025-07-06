import { useCallback, useState } from "react";
import useUser from "../../../../../common/hooks/useUser";
import { BASE_BE_URI } from "../../../../../Routing";
import { TActivity } from "../../../types";

const usePostActivityApi = () => {
  const { userToken } = useUser();

  const [isLoading, setIsLoading] = useState(false);

  const postActivity = useCallback(
    (payload: Omit<TActivity, "id">) => {
      setIsLoading(true);
      return fetch(`${BASE_BE_URI}/activity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          timestamp: payload.timestamp,
          activity: payload.name,
          categoryId: payload.category,
          amount: payload.amount,
        }),
      })
        .then((response) => {
          response
            .json()
            .then((response) => {
              console.log(response);
            })
            .catch((response) => {
              console.log(response);
            });
        })
        .catch((response) => {
          console.log(response);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [userToken]
  );

  return {
    postActivity,
    isLoading,
  };
};

export default usePostActivityApi;
