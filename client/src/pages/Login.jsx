import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import "../styles/Password.css";
import { useNavigate } from 'react-router-dom';
import HeaderLogin from '../components/Header_Login';

const $ = window.$;

const Login = () => {
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const updateUserID = (e) => {
        setUserID(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const login = (e) => {
        e.preventDefault();

        const body = { userID: userID, password: password };

        $.ajax({
            url: "/api/login",
            dataType: 'json',
            type: 'POST',
            data: body
        })
        .then(
            function(data) {
                if(data.authorized) {
                    setMessage("ログイン成功");
                    navigate('/home');
                }
                else {
                    setMessage("ユーザーIDまたはパスワードが間違っています");
                    document.getElementById("userID").classList.add("p-invalid");
                    document.getElementById("password").classList.add("p-invalid");
                }
            }
        );
    }

    return (
        <React.Fragment>
            <HeaderLogin />
            <Container component="main" maxWidth="xs" fixed>
                <CssBaseline />
                <h1>ログイン画面</h1>
                <form onSubmit={login}>
                    <div>
                        <label htmlFor="userID" className="p-col-fixed" style={{width: '100px'}}>ユーザーID</label>
                        <div className="p-col">
                            <InputText id="userID" value={userID} onChange={updateUserID} />
                        </div>
                    </div>
                    <div className="p-d-block p-mx-auto">
                        <label htmlFor="password" className="p-col-fixed" style={{width: '100px'}}>パスワード</label>
                        <div className="p-col">
                            <Password id="password" value={password} onChange={updatePassword} toggleMask />
                        </div>
                    </div>
                    <div className="button-demo">
                        <Button label="Login" icon="pi pi-check" />
                    </div>
                </form>
                <p className="p-text-bold">{message}</p>
            </Container>
        </React.Fragment>
    );
}

export default Login;