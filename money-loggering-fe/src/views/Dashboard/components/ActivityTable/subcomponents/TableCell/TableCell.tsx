import { FC, ReactNode } from "react";
import { Container } from "./styles";

interface TTableCellProps {
  children: ReactNode;
}

const TableCell: FC<TTableCellProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default TableCell;
