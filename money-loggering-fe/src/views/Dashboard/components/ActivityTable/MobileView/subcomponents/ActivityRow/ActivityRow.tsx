import { FC } from "react";
import { TActivity } from "../../../../../../../redux/activityApi";
import {
  AmountContainer,
  Container,
  NameContainer,
  RowBodyContainer,
  RowHeaderContainer,
} from "./styles";
import dayjs from "dayjs";

interface TActivityRowProps {
  activity: TActivity;
}

const ActivityRow: FC<TActivityRowProps> = ({ activity }) => {
  return (
    <Container>
      <RowHeaderContainer>
        <div>{dayjs(activity.timestamp).format("MM/DD/YYYY h:mm A")}</div>
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
