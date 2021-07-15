import React, {useState} from "react";
import Card from "../UI/Card";
import Button from '../UI/Button';
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
        <label htmlFor="username">Username</label>
        <input value={enteredUserName} onChange={userNameChangeHandler} id="username" type="text" />
        <label htmlFor="userage">Age(Years)</label>
        <input value={enteredAge} onChange={ageChangeHandler} id="userage" type="number" />
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
