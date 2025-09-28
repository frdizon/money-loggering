import { usePutCategoryMutation } from "../../../../../redux/categoryApi";
import z from "zod";
import { useCallback } from "react";
import useFormState from "../../../../../common/hooks/useFormState";
import { TCategory } from "../../../../../redux/categoryApi";

const ZSCHEMA_CATEGORY = z.object({
  name: z.string().min(1),
});

const usePostCategory = (initialValue: TCategory) => {
  const [putCategoryMutation, { isLoading: isLoadingPutCategory }] =
    usePutCategoryMutation();

  const { formState, handleFormStateUpdate, handleValidate } =
    useFormState<TCategory>(initialValue, ZSCHEMA_CATEGORY);

  const onSubmit = useCallback(() => {
    if (handleValidate()) {
      return putCategoryMutation(formState);
    }
  }, [formState, handleValidate, putCategoryMutation]);

  return {
    formState,
    handleFormStateUpdate,
    isLoadingPutCategory,
    onSubmit,
  };
};

export default usePostCategory;
