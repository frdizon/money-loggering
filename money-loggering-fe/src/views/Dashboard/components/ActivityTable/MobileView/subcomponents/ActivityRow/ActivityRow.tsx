import { FC, useCallback } from "react";
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
  onClick: (activityToBeEdited: TActivity) => void;
}

const ActivityRow: FC<TActivityRowProps> = ({ activity, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(activity);
  }, [activity, onClick]);

  return (
    <Container onClick={handleClick}>
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
