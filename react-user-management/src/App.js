import {useState} from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [usersList, setUsersList ] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prev => {
      return [...prev, {name:uName, age:uAge, id:Math.random().toString()}]
    })
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
