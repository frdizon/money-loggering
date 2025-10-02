import {
  TActivity,
  usePutActivityMutation,
} from "../../../../../redux/activityApi";
import z from "zod";
import { useCallback } from "react";
import useFormState from "../../../../../common/hooks/useFormState";

const ZSCHEMA_ACTIVITY = z.object({
  timestamp: z.string(),
  categoryid: z.number(),
  name: z.string().min(1),
  amount: z.coerce.number().positive(),
});

const useEditActivity = (initialState: TActivity) => {
  const [putActivityMutation, { isLoading: isLoadingPutActivity }] =
    usePutActivityMutation();

  const { formState, handleFormStateUpdate, handleValidate, errorFieldsSet } =
    useFormState<TActivity>(initialState, ZSCHEMA_ACTIVITY);

  const onSubmit = useCallback(() => {
    if (handleValidate()) {
      return putActivityMutation(formState);
    }
  }, [formState, handleValidate, putActivityMutation]);

  return {
    formState,
    handleFormStateUpdate,
    isLoadingPutActivity,
    onSubmit,
    errorFieldsSet,
  };
};

export default useEditActivity;
