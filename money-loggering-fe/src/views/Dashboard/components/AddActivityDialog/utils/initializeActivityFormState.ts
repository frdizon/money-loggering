import dayjs from "dayjs";
import { TActivity } from "../../../../../redux/activityApi";

const initializeActivityFormState = (): Omit<TActivity, "id"> => ({
  timestamp: dayjs().toISOString(),
  name: "",
  amount: 0,
  category: "",
});

export default initializeActivityFormState;
