import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import HeaderLogin from '../components/Header_Login';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

const CreateUserComp = () => {
    const steps = ['登録情報入力', '登録情報確認', '登録完了'];
    const navigate = useNavigate();

    const handleToLogin = () => {
        navigate('/');
    };

    return (
        <React.Fragment>
            <HeaderLogin />
            <Box sx={{ width: '100%',  marginTop: 5 }}>
                <Stepper activeStep={2} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <div className="form-demo">
                <div className="p-d-flex p-jc-center">
                    <div className="card p-fluid">
                        <div className="button-demo">
                            <Button label="ログイン画面へ" icon="pi pi-check" onClick={handleToLogin} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CreateUserComp;