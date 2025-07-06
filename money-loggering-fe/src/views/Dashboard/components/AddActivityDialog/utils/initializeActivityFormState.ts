import dayjs from "dayjs";
import { TActivity } from "../../../types";

const initializeActivityFormState = (): Omit<TActivity, "id"> => ({
  timestamp: dayjs(),
  name: "",
  amount: 0,
  category: "",
});

export default initializeActivityFormState;
