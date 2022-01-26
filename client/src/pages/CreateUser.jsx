import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import HeaderLogin from '../components/Header_Login';
import { userIDState, passwordState, againPasswordState, lastNameState, firstNameState, genderState } from '../atoms/createUser';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import "../styles/Password.css";
import "../styles/FormDemo.css";

const CreateUser = () => {
    const steps = ['登録情報入力', '登録情報確認', '登録完了'];
    const [userID, setUserID] = useRecoilState(userIDState);
    const [password, setPassword] = useRecoilState(passwordState);
    const [againPassword, setAgainPassword] = useRecoilState(againPasswordState);
    const [lastName, setLastName] = useRecoilState(lastNameState);
    const [firstName, setFirstName] = useRecoilState(firstNameState);
    const [gender, setGender] = useRecoilState(genderState);
    const [message, setMessage] = useState("");
    const infoMessage = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        infoMessage.current.show([{ severity: 'info', detail: '以下情報がログインの時に使用する情報になります。', sticky: true, closable: false }]);
    }, []);

    const updateUserID = (e) => {
        setUserID(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateAgainPassword = (e) => {
        setAgainPassword(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateGender = (e) => {
        setGender(e.target.value);
    };

    const handleBack = () => {
        navigate('/');
    };

    const create = (e) => {
        navigate('/createUserConf');
    }

    return (
        <React.Fragment>
            <HeaderLogin />
            <Box sx={{ width: '100%',  marginTop: 5 }}>
                <Stepper activeStep={0} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <div className="form-demo">
                <div className="p-d-flex p-jc-center">
                    <div className="card">
                        <form onSubmit={create} className="p-fluid">
                            <div className="p-field">
                                <span className="p-float-label">
                                    <InputText id="lastName" value={lastName} onChange={updateLastName} />
                                    <label htmlFor="lastName">姓</label>
                                </span>
                            </div>
                            <div className="p-field">
                                <span className="p-float-label">
                                    <InputText id="firstName" value={firstName} onChange={updateFirstName} />
                                    <label htmlFor="firstName">名</label>
                                </span>
                            </div>
                            <div className="p-field">
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">性別</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={gender}
                                        onChange={updateGender}
                                    >
                                        <FormControlLabel value="男性" control={<Radio />} label="男性" />
                                        <FormControlLabel value="女性" control={<Radio />} label="女性" />
                                        <FormControlLabel value="回答しない" control={<Radio />} label="回答しない" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <Divider />
                            <Messages ref={infoMessage} />
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
                            <div className="p-field">
                                <span className="p-float-label">
                                    <Password id="againPassword" value={againPassword} onChange={updateAgainPassword} toggleMask />
                                    <label htmlFor="againPassword">パスワード（確認用）</label>
                                </span>
                            </div>
                            <div className="button-demo">
                                <span className="p-buttonset">
                                    <Button label="戻る" icon="pi pi-times" className="p-button-danger" onClick={handleBack} />
                                    <Button label="次へ" icon="pi pi-check" />
                                </span> 
                            </div>
                        </form>
                        <p className="p-rext-bold p-text-center">{message}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CreateUser;