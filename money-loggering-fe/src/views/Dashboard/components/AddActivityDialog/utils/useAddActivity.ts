import {
  TActivity,
  usePostActivityMutation,
} from "../../../../../redux/activityApi";
import initializeActivityFormState from "./initializeActivityFormState";
import z from "zod";
import { useCallback } from "react";
import useFormState from "../../../../../common/hooks/useFormState";

const ZSCHEMA_ACTIVITY = z.object({
  timestamp: z.string(),
  category: z.number(),
  name: z.string().min(1),
  amount: z.coerce.number().positive(),
});

const useAddActivity = (onSuccess: () => void) => {
  const [postActivityMutation, { isLoading: isLoadingPostActivity }] =
    usePostActivityMutation();

  const { formState, handleFormStateUpdate, handleValidate, errorFieldsSet } =
    useFormState<Omit<TActivity, "id">>(
      initializeActivityFormState,
      ZSCHEMA_ACTIVITY
    );

  const onSubmit = useCallback(() => {
    if (handleValidate()) {
      postActivityMutation(formState).then(() => {
        onSuccess();
        handleFormStateUpdate(initializeActivityFormState());
      });
    }
  }, [
    formState,
    handleFormStateUpdate,
    handleValidate,
    onSuccess,
    postActivityMutation,
  ]);

  return {
    formState,
    handleFormStateUpdate,
    isLoadingPostActivity,
    onSubmit,
    errorFieldsSet,
  };
};

export default useAddActivity;
