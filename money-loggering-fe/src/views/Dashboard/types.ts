import { Dayjs } from "dayjs";

export interface TActivity {
  id: number;
  timestamp: Dayjs;
  category: string;
  name: string;
  amount: number;
}

export type TShownDashboardDialog =
  | ""
  | "add-activity"
  | "modify-categories"
  | "modify-query";

export interface TCategory {
  id: number;
  name: string;
}
