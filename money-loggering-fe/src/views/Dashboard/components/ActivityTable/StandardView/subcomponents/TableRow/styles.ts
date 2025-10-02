import styled from "styled-components";
import { TableRowBaseContainer } from "../../styles";

export const Container = styled(TableRowBaseContainer)`
  border-bottom: 1px solid gray;
  cursor: pointer;

  &:hover {
    background-color: #141414;
    transition: background-color 0.2s;
  }
`;
