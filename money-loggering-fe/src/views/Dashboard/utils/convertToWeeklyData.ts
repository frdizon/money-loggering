import dayjs from "dayjs";
import { TActivity } from "../types";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekOfYear);

const convertToWeeklyData = (activities: TActivity[]) => {
  if (activities.length === 0) {
    return { weeklyDataArr: [], categoriesArr: [] };
  }
  // Initialize
  const weeklyDataArr: Record<string, number>[] = [];
  let weeklyIndexHolder = activities[0].timestamp.week();
  let weeklyDataHolder: Record<string, number> = {
    week: activities[0].timestamp.week(),
  };
  const categoriesSet = new Set<string>();

  activities.forEach((activity: TActivity) => {
    if (activity.timestamp.week() !== weeklyIndexHolder) {
      // Save week details then increment week index.
      weeklyDataArr.unshift(weeklyDataHolder);
      weeklyDataHolder = { week: activity.timestamp.week() };
      weeklyIndexHolder = activity.timestamp.week();
    }
    if (Object.keys(weeklyDataHolder).includes(activity.category)) {
      weeklyDataHolder[activity.category] += activity.amount;
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
