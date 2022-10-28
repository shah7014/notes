import GoalItem from "./GoalItem";
import "./GoalsList.css";

const GoalsList = (props) => {
  const handleGoalComplete = (goalId) => {
    props.onGoalComplete(goalId);
  };

  return (
    <div className="goals">
      <ul className="goals-list">
        {props.goals.map((goal) => (
          <GoalItem
            key={goal.id}
            goal={goal}
            onGoalComplete={handleGoalComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default GoalsList;
