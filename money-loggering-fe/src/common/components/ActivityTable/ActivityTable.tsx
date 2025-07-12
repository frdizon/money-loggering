import { FC } from "react";
import { StyledPaper } from "./styles";
import TableHeader from "./subcomponents/TableHeader/TableHeader";
import TableRow from "./subcomponents/TableRow/TableRow";
import { TActivity } from "../../../redux/activityApi";

interface TActivityProps {
  activityData: TActivity[];
}

const ActivityTable: FC<TActivityProps> = ({ activityData }) => {
  return (
    <StyledPaper>
      <TableHeader />
      {activityData.map((activityItem) => (
        <TableRow key={activityItem.id} activity={activityItem} />
      ))}
    </StyledPaper>
  );
};

export default ActivityTable;
