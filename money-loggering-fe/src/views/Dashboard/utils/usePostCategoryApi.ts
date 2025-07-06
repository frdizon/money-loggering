import { useCallback, useState } from "react";
import useUser from "../../../common/hooks/useUser";
import { BASE_BE_URI } from "../../../Routing";

const usePostCategoryApi = () => {
  const { userToken } = useUser();

  const [isLoading, setIsLoading] = useState(false);

  const handlePostCategory = useCallback(
    (categoryName: string, onRefreshListApi: () => void) => {
      setIsLoading(true);
      fetch(`${BASE_BE_URI}/category`, {
        method: "POST",
        body: JSON.stringify({ name: categoryName }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then(() => onRefreshListApi())
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
    isLoading,
    handlePostCategory,
  };
};

export default usePostCategoryApi;
