import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SearchUser from './pages/SearchUser';
import ChangeUser from './pages/ChangeUser';
import CreateUser from './pages/CreateUser';
import CreateUserConf from './pages/CreateUserConf';
import CreateUserComp from './pages/CreateUserComp';
import Logout from './pages/Logout';
import reportWebVitals from './reportWebVitals';
import DeleteUser from './pages/DeleteUser';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/searchUser" element={<SearchUser />} />
      <Route exact path="/changeUser" element={<ChangeUser />} />
      <Route exact path="/deleteUser" element={<DeleteUser />} />
      <Route exact path="/createUser" element={<CreateUser />} />
      <Route exact path="/createUserConf" element={<CreateUserConf />} />
      <Route exact path="/createUserComp" element={<CreateUserComp />} />
      <Route exact path="/logout" element={<Logout />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
