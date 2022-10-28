import { useState } from "react";
import "./NewGoalForm.css";

const NewGoalForm = (props) => {
  const [newGoal, setNewGoal] = useState("");

  const goalChangeHandler = (event) => {
    setNewGoal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSaveGoal({ title: newGoal, isDone: false });
    setNewGoal("");
  };

  return (
    <div className="goal--form">
      <form onSubmit={handleSubmit}>
        <label className="goal--form--label" htmlFor="title">
          Course Goal
        </label>
        <input
          className="goal--form--input"
          id="title"
          value={newGoal}
          onChange={goalChangeHandler}
        />
        <div className="form--action">
          <button type="submit">Add Goal</button>
        </div>
      </form>
    </div>
  );
};

export default NewGoalForm;
