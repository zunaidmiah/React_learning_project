import React, { useState, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
// import './style.css';

import UsersList from './components/UsersList';
import UserRegister from './components/UserRegister';
import Search from './components/Search';
import Reducer from './components/Reducer';

function App() {
//   const usersInfo = [
//     {
//       id : 1,
//       name : 'Zunaid Miah',
//       phone : '01712345678',
//       email : 'zuanid@gmail.com',
//       about : 'I am a software engineer, having experience in web development and mobile app development.',
//     },
//     {
//       id : 2,
//       name : 'John Doe',
//       phone : '01234567890',
//       email : 'jonh@gmail.com',
//       about : 'I am a Web Developer, having experience in web development and mobile app development.',
//     }

//   ]

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data.map(user => ({
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                about: user.company.catchPhrase
            })));
            setFilteredUsers(data.map(user => ({
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                about: user.company.catchPhrase
            })));
        });
    }, []);

  const handleAddUser = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
    toast(`User added suuccesfully`);
    setFilteredUsers((prevUsers) => {
      return [...prevUsers, user];
    });
    setShowRegisterForm(false);
  }

  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter(user => user.id !== id);
    });
    setFilteredUsers((prevUsers) => {
      return prevUsers.filter(user => user.id !== id);
    });
    toast(`User with ID ${id} deleted successfully`);
  }

  const handleSearchTerm = (term) => {
    const searchTerm = term.toLowerCase();
    const filteredUsers = users.filter((user) => {
        const userName = user.name.toLowerCase();
        return userName.startsWith(searchTerm);
    });
    setFilteredUsers(filteredUsers);
  }

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
  }

  return (
    <div className="App">
      {showRegisterForm &&
        <>
          <div className="registerForm">
            <h1>User Registration</h1>
            <UserRegister onAddUser={handleAddUser} />
          </div>
          <hr />
        </>
      }
      <div>
        <ToastContainer />
        <h1 className='headerTitle'>Users list</h1>
        <hr />
        <div className='d-flex justify-content-between align-items-center mb-3 px-4'>
          <Search onHandleSearch={handleSearchTerm} />
          <button className="btn btn-primary" onClick={toggleRegisterForm}>
            {showRegisterForm ? 'Close Form' : 'Add User'}
          </button>
        </div>
        <UsersList users={filteredUsers} onDeleteUser={handleDeleteUser} />
      </div>


      {/* Reducer Hook */}
      <hr />
      <div style={{textAlign: 'left' , padding: '20px' }}>
        <Reducer />
      </div>
      {/* End Reducer Hook */}
    </div>
  );
}

export default App;
