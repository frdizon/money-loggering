import { FC } from "react";
import { Container } from "./styles";
import TableCell from "../TableCell/TableCell";
import { TActivity } from "../../../../../views/Dashboard/types";

interface TTableRowProps {
  activity: TActivity;
}

const TableRow: FC<TTableRowProps> = ({ activity }) => {
  return (
    <Container>
      <TableCell>{activity.timestamp.format("MM/DD/YYYY")}</TableCell>
      <TableCell>{activity.category}</TableCell>
      <TableCell>{activity.name}</TableCell>
      <TableCell>{activity.amount}</TableCell>
    </Container>
  );
};

export default TableRow;
