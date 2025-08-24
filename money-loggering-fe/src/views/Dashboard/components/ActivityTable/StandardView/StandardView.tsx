import { FC } from "react";
import { StyledPaper } from "./styles";
import TableHeader from "./subcomponents/TableHeader/TableHeader";
import TableRow from "./subcomponents/TableRow/TableRow";
import { TActivityProps } from "../ActivityTable";

const StandardView: FC<TActivityProps> = ({ activityData }) => {
  return (
    <StyledPaper>
      <TableHeader />
      {activityData.map((activityItem) => (
        <TableRow key={activityItem.id} activity={activityItem} />
      ))}
    </StyledPaper>
  );
};

export default StandardView;
