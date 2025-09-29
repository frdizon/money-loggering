import { FC } from "react";
import { TActivity } from "../../../../redux/activityApi";
// import ResponsiveWrapper from "../../../../common/components/ResponsiveWrapper/ResponsiveWrapper";
import StandardView from "./StandardView/StandardView";
import MobileView from "./MobileView/MobileView";
import { StyledResponsiveWrapper } from "./styles";

export interface TActivityTableProps {
  activityData: TActivity[];
}

export interface TActivityProps {
  activityData: TActivity[];
  onEditActivity: (activity: TActivity) => void;
}

const ActivityTable: FC<TActivityProps> = ({
  activityData,
  onEditActivity,
}) => {
  return (
    <StyledResponsiveWrapper
      standardComponent={
        <StandardView
          activityData={activityData}
          onEditActivity={onEditActivity}
        />
      }
      mobileComponent={
        <MobileView
          activityData={activityData}
          onEditActivity={onEditActivity}
        />
      }
    />
  );
};

export default ActivityTable;
