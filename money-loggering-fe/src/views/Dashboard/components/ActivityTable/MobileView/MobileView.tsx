import { FC } from "react";
import { TActivityProps } from "../ActivityTable";
import { StyledPaper } from "./styles";
import ActivityRow from "./subcomponents/ActivityRow/ActivityRow";

const MobileView: FC<TActivityProps> = ({ activityData }) => {
  return (
    <StyledPaper>
      {activityData.map((activityItem) => (
        <ActivityRow key={activityItem.id} activity={activityItem} />
      ))}
    </StyledPaper>
  );
};

export default MobileView;
