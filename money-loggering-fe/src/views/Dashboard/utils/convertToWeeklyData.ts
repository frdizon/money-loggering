import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekday from "dayjs/plugin/weekday";
import { TActivity } from "../../../redux/activityApi";

dayjs.extend(weekOfYear);
dayjs.extend(weekday);

// TODO: This logic should be handled on BE
const convertToWeeklyData = (activities: TActivity[]) => {
  if (activities.length === 0) {
    return { weeklyDataArr: [], categoriesArr: [] };
  }
  // Initialize
  const weeklyDataArr: Record<string, string | number>[] = [];
  let weeklyIndexHolder = dayjs(activities[0].timestamp).week();
  let weeklyDataHolder: Record<string, string | number> = {
    week: dayjs(activities[0].timestamp).weekday(0).format("MMM D"),
  };
  const categoriesSet = new Set<string>();

  activities.forEach((activity: TActivity) => {
    if (dayjs(activity.timestamp).week() !== weeklyIndexHolder) {
      // Save week details then increment week index.
      weeklyDataArr.unshift(weeklyDataHolder);
      weeklyDataHolder = {
        week: dayjs(activity.timestamp).weekday(0).format("MMM D"),
      };
      weeklyIndexHolder = dayjs(activity.timestamp).week();
    }
    if (Object.keys(weeklyDataHolder).includes(activity.category)) {
      (weeklyDataHolder[activity.category] as number) += activity.amount;
    } else {
      weeklyDataHolder[activity.category] = activity.amount;
      categoriesSet.add(activity.category);
    }
  });
  weeklyDataArr.unshift(weeklyDataHolder);

  const categoriesArr: string[] = [];
  categoriesSet.forEach((categoryName) => categoriesArr.push(categoryName));
  categoriesArr.sort();

  return { weeklyDataArr, categoriesArr };
};

export default convertToWeeklyData;
