import { TCategory } from "../../../../../redux/categoryApi";

const initializeCategoryFormState = (): Omit<TCategory, "id"> => ({
  name: "",
});

export default initializeCategoryFormState;
