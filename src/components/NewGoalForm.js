import { useState } from "react";
import Button from "./Button";
import classes from "./NewGoalForm.module.css";

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
    <div className={classes["goal--form"]}>
      <form onSubmit={handleSubmit}>
        <label
          className={`${classes["goal--form--label"]} ${
            isValid ? "" : classes.invalid
          }`}
          htmlFor="title"
        >
          Course Goal
        </label>
        <input
          className={`${classes["goal--form--input"]} ${
            isValid ? "" : classes.invalid
          }`}
          id="title"
          value={newGoal}
          onChange={goalChangeHandler}
        />
        <div className={classes["form--action"]}>
          <Button type="submit">Add Goal</Button>
        </div>
      </form>
    </div>
  );
};

export default NewGoalForm;
