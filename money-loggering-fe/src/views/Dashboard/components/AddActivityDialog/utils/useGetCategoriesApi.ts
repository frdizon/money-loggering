import { useCallback, useEffect, useState } from "react";
import { BASE_BE_URI } from "../../../../../Routing";
import useUser from "../../../../../common/hooks/useUser";
import { TCategory } from "../../../types";

const useGetCategoriesApi = () => {
  const { userToken } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TCategory[]>([]);

  const handleGetCategoryApi = useCallback(() => {
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
    handleGetCategoryApi();
  }, [handleGetCategoryApi]);

  return {
    isLoading,
    handleGetCategoryApi,
    data,
  };
};

export default useGetCategoriesApi;
