import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';
import Link from'@mui/material/Link';
import Box from '@mui/material/Box';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import "../styles/Password.css";
import "../styles/FormDemo.css";
import { useNavigate } from 'react-router-dom';
import HeaderLogin from '../components/Header_Login';

const $ = window.$;

const Login = () => {
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const message = useRef(null);
    const navigate = useNavigate();

    const updateUserID = (e) => {
        setUserID(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const addMessage = () => {
        message.current.show([{severity: 'error', detail: 'ユーザーIDまたはパスワードが間違っています', sticky: true}]);
    };

    const clearMessage = () => {
        message.current.clear();
    };

    const login = (e) => {
        e.preventDefault();
        clearMessage();

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
                    navigate('/home');
                }
                else {
                    addMessage();
                    document.getElementById("userID").classList.add("p-invalid");
                    document.getElementById("password").classList.add("p-invalid");
                }
            }
        );
    }

    return (
        <React.Fragment>
            <HeaderLogin />
            <Box sx={{ marginTop: 5 }}>
                <div className="form-demo">
                    <div className="p-d-flex p-jc-center">
                        <div className="card">
                            <h1 className="p-text-center">ログイン画面</h1>
                            <form onSubmit={login} className="p-fluid">
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <InputText id="userID" value={userID} onChange={updateUserID} />
                                        <label htmlFor="userID">ユーザーID</label>
                                    </span>
                                </div>
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <Password id="password" value={password} onChange={updatePassword} toggleMask />
                                        <label htmlFor="password">パスワード</label>
                                    </span>
                                </div>
                                <div className="button-demo">
                                    <Button label="ログイン" icon="pi pi-check" />
                                </div>
                            </form>
                            <Link href="/createUser" variant="body2">
                                新規会員登録はこちら
                            </Link>
                            <Messages ref={message} />
                        </div>
                    </div>
                </div>
            </Box>
        </React.Fragment>
    );
}

export default Login;