import { useCallback, useEffect, useState } from "react";
import useUser from "../../../common/hooks/useUser";
import { TActivity } from "../types";
import { BASE_BE_URI } from "../../../Routing";
import dayjs from "dayjs";

const useGetActivitiesApi = () => {
  const { userToken } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TActivity[]>([]);

  const handleCallApi = useCallback(() => {
    setIsLoading(true);
    fetch(`${BASE_BE_URI}/activity`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => {
        response
          .json()
          .then((response) => {
            setData(
              (response as TActivity[]).map((datum) => ({
                ...datum,
                timestamp: dayjs(datum.timestamp),
              }))
            );
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
  }, [userToken]);

  useEffect(() => {
    handleCallApi();
  }, [handleCallApi]);

  return {
    isLoading,
    handleCallApi,
    data,
  };
};

export default useGetActivitiesApi;
