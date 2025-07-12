import { usePostCategoryMutation } from "../../../../../redux/categoryApi";
import initializeCategoryFormState from "./initializeCategoryFormState";
import z from "zod";
import { useCallback } from "react";
import useFormState from "../../../../../common/hooks/useFormState";
import { TCategory } from "../../../../../redux/categoryApi";

const ZSCHEMA_CATEGORY = z.object({
  name: z.string().min(1),
});

const useAddCategory = () => {
  const [postCategoryMutation, { isLoading: isLoadingPostCategory }] =
    usePostCategoryMutation();

  const { formState, handleFormStateUpdate, handleValidate } = useFormState<
    Omit<TCategory, "id">
  >(initializeCategoryFormState, ZSCHEMA_CATEGORY);

  const onSubmit = useCallback(() => {
    if (handleValidate()) {
      postCategoryMutation(formState);
      handleFormStateUpdate(initializeCategoryFormState());
    }
  }, [formState, handleFormStateUpdate, handleValidate, postCategoryMutation]);

  return {
    formState,
    handleFormStateUpdate,
    isLoadingPostCategory,
    onSubmit,
  };
};

export default useAddCategory;
