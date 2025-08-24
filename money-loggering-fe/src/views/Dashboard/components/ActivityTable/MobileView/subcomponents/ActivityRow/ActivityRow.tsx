import { FC } from "react";
import { TActivity } from "../../../../../../../redux/activityApi";
import {
  AmountContainer,
  Container,
  NameContainer,
  RowBodyContainer,
  RowHeaderContainer,
} from "./styles";

interface TActivityRowProps {
  activity: TActivity;
}

const ActivityRow: FC<TActivityRowProps> = ({ activity }) => {
  return (
    <Container>
      <RowHeaderContainer>
        <div>{activity.timestamp}</div>
        <div>{activity.category}</div>
      </RowHeaderContainer>
      <RowBodyContainer>
        <NameContainer>{activity.name}</NameContainer>
        <AmountContainer>{activity.amount}</AmountContainer>
      </RowBodyContainer>
    </Container>
  );
};

export default ActivityRow;
