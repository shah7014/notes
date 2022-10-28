import "./GoalItem.css";

const GoalItem = (props) => {
  const handleGoalComplete = () => {
    props.onGoalComplete(props.goal.id);
  };

  const textDecoration = props.goal.isDone ? "line-through" : "none";

  return (
    <li
      className="goal-item"
      onClick={handleGoalComplete}
      style={{ textDecoration }}
    >
      {props.goal.title}
    </li>
  );
};

export default GoalItem;
