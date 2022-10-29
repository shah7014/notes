import { useState } from "react";
import "./NewGoalForm.css";

const NewGoalForm = (props) => {
  const [newGoal, setNewGoal] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalChangeHandler = (event) => {
    if (event.target.value.trim().length !== 0) {
      setIsValid(true);
    }
    setNewGoal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newGoal.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onSaveGoal({ title: newGoal, isDone: false });
    setNewGoal("");
  };

  return (
    <div className="goal--form">
      <form onSubmit={handleSubmit}>
        <label
          className={`goal--form--label ${isValid ? "" : "invalid"}`}
          htmlFor="title"
        >
          Course Goal
        </label>
        <input
          className={`goal--form--input ${isValid ? "" : "invalid"}`}
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
