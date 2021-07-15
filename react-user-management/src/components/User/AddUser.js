import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandleer = (event) => {
    event.preventDefault();
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
    console.log(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    console.log(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandleer}>
        <label>Username</label>
        <input value={enteredUserName} onChange={userNameChangeHandler} id="username" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input value={enteredAge} onChange={ageChangeHandler} type="number" type="number" />
        <button>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
