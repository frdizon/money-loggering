import { FC, useCallback } from "react";
import { Container } from "./styles";
import TableCell from "../TableCell/TableCell";
import { TActivity } from "../../../../../../../redux/activityApi";
import dayjs from "dayjs";

interface TTableRowProps {
  activity: TActivity;
  onClick: (activityToBeEdited: TActivity) => void;
}

const TableRow: FC<TTableRowProps> = ({ activity, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(activity);
  }, [activity, onClick]);

  return (
    <Container onClick={handleClick}>
      <TableCell>{dayjs(activity.timestamp).format("MM/DD/YYYY")}</TableCell>
      <TableCell>{activity.category}</TableCell>
      <TableCell>{activity.name}</TableCell>
      <TableCell>{activity.amount}</TableCell>
    </Container>
  );
};

export default TableRow;
