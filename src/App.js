import { useState } from "react";
import "./App.css";
import GoalsList from "./components/GoalsList";
import NewGoalForm from "./components/NewGoalForm";

function App() {
  const [goals, setGoals] = useState([
    {
      id: 0,
      title: "Do all exercises",
      isDone: false,
    },
    {
      id: 1,
      title: "Finish the course",
      isDone: false,
    },
    {
      id: 2,
      title: "Pay rent",
      isDone: true,
    },
  ]);

  const saveGoalHandler = (goal) => {
    setGoals((prevGoals) => [{ ...goal, id: prevGoals.length }, ...prevGoals]);
  };

  const handleGoalComplete = (goalId) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) => {
        if (goal.id === goalId) {
          return { ...goal, isDone: !goal.isDone };
        }
        return goal;
      })
    );
  };

  return (
    <div className="container">
      <NewGoalForm onSaveGoal={saveGoalHandler} />
      <GoalsList goals={goals} onGoalComplete={handleGoalComplete} />
    </div>
  );
}

export default App;
