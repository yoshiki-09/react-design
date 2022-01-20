import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
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
import Typography from '@mui/material/Typography';
import HeaderLogin from '../components/Header_Login';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import "../styles/Password.css";
import "../styles/FormDemo.css";

const CreateUser = () => {
    const steps = ['登録情報入力', '登録情報確認', '登録完了'];
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [againPassword, setAgainPassword] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

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

    const updateBirthday = (e) => {
        setBirthday(e.target.value);
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
                                <span className="p-float-label">
                                    <Calendar id="birthday" value={birthday} onChange={updateBirthday} dateFormat="yy/mm/dd" showIcon />
                                    <label htmlFor="birthday">誕生日</label>
                                </span>
                            </div>
                            <div className="p-field">
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">性別</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value={gender} onChange={updateGender} control={<Radio />} label="男性" />
                                        <FormControlLabel value={gender} onChange={updateGender} control={<Radio />} label="女性" />
                                        <FormControlLabel value={gender} onChange={updateGender} control={<Radio />} label="回答しない" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <Divider />
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