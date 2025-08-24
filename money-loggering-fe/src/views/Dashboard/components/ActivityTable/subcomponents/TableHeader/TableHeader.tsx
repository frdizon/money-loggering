import { FC } from "react";
import { Container } from "./styles";
import TableCell from "../TableCell/TableCell";

const TableHeader: FC = () => {
  return (
    <Container>
      <TableCell>Datetime</TableCell>
      <TableCell>Category</TableCell>
      <TableCell>Activity</TableCell>
      <TableCell>Amount</TableCell>
    </Container>
  );
};

export default TableHeader;
