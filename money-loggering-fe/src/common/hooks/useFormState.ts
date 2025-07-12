import { useCallback, useState } from "react";
import z from "zod";

type TInitialFormValue<T> = T | (() => T);

const useFormState = <T>(
  initialValue: TInitialFormValue<T>,
  zod_schema: z.ZodType
) => {
  const [formState, setFormState] = useState<T>(initialValue);
  const [errorFieldsSet, setErrorFieldsSet] = useState<Set<string>>(new Set());

  const handleFormStateUpdate = useCallback((updatedFormState: Partial<T>) => {
    setFormState((prev) => ({ ...prev, ...updatedFormState }));
  }, []);

  const handleValidate = useCallback(() => {
    const parseResult = zod_schema.safeParse(formState);
    if (parseResult.success) {
      return true;
    } else {
      setErrorFieldsSet(
        parseResult.error.issues.reduce((errorSet, currentError) => {
          currentError.path.forEach((path) => errorSet.add(path.toString()));
          return errorSet;
        }, new Set<string>())
      );
      return false;
    }
  }, [formState, zod_schema]);

  return {
    formState,
    handleFormStateUpdate,
    handleValidate,
    errorFieldsSet,
  };
};

export default useFormState;
