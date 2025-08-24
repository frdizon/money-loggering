import { FC } from "react";
import { TActivity } from "../../../../redux/activityApi";
// import ResponsiveWrapper from "../../../../common/components/ResponsiveWrapper/ResponsiveWrapper";
import StandardView from "./StandardView/StandardView";
import MobileView from "./MobileView/MobileView";
import { StyledResponsiveWrapper } from "./styles";

export interface TActivityProps {
  activityData: TActivity[];
}

const ActivityTable: FC<TActivityProps> = ({ activityData }) => {
  return (
    <StyledResponsiveWrapper
      standardComponent={<StandardView activityData={activityData} />}
      mobileComponent={<MobileView activityData={activityData} />}
    />
  );
};

export default ActivityTable;
