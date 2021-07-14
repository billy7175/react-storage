import React from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandleer = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandleer}>
        <label class="">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input type="submit" type="number" />
        <button>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
