import { useCallback, useEffect, useState } from "react";
import useUser from "../../../common/hooks/useUser";
import { TCategory } from "../types";
import { BASE_BE_URI } from "../../../Routing";

const useGetCategoriesApi = () => {
  const { userToken } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TCategory[]>([]);

  const handleCallApi = useCallback(() => {
    setIsLoading(true);
    fetch(`${BASE_BE_URI}/category`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => {
        response
          .json()
          .then((response) => {
            setData(response);
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

export default useGetCategoriesApi;
