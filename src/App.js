import { useState } from 'react'
import AddUser from '../src/components/Users/AddUser'
import UserList from '../src/components/Users/UserList'


function App() {
  const [userList, setUserList] = useState([])
  const addUserHanlder = (name, age) => {
    console.log('#addUserHanlder')
    console.log(name, age)
    setUserList((prev) => {
      return [...prev, { name, age, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHanlder}></AddUser>
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
