import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SearchUser from './pages/SearchUser';
import ChangeUser from './pages/ChangeUser';
import CreateUser from './pages/CreateUser';
import CreateUserConf from './pages/CreateUserConf';
import CreateUserComp from './pages/CreateUserComp';
import Logout from './pages/Logout';
import DeleteUser from './pages/DeleteUser';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/searchUser" element={<SearchUser />} />
                <Route path="/changeUser" element={<ChangeUser />} />
                <Route path="/deleteUser" element={<DeleteUser />} />
                <Route path="/createUser" element={<CreateUser />} />
                <Route path="/createUserConf" element={<CreateUserConf />} />
                <Route path="/createUserComp" element={<CreateUserComp />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </BrowserRouter> 
    );
}

export default App;