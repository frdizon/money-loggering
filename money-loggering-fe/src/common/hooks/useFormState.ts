import { useCallback, useState } from "react";

type TInitialFormValue<T> = T | (() => T);

const useFormState = <T>(initialValue: TInitialFormValue<T>) => {
  const [formState, setFormState] = useState<T>(initialValue);

  const handleFormStateUpdate = useCallback((updatedFormState: Partial<T>) => {
    setFormState((prev) => ({ ...prev, ...updatedFormState }));
  }, []);

  return {
    formState,
    handleFormStateUpdate,
  };
};

export default useFormState;
