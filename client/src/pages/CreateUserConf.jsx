import React, { useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import HeaderLogin from '../components/Header_Login';
import { userIDState, passwordState, lastNameState, firstNameState, genderState } from '../atoms/createUser';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

const CreateUserConf = () => {
    const steps = ['登録情報入力', '登録情報確認', '登録完了'];
    const userID = useRecoilValue(userIDState);
    const password = useRecoilValue(passwordState);
    const lastName = useRecoilValue(lastNameState);
    const firstName = useRecoilValue(firstNameState);
    const gender = useRecoilValue(genderState);
    const navigate = useNavigate();
    const infoMessage = useRef(null);

    useEffect(() => {
        infoMessage.current.show([{ severity: 'info', detail: '以下情報でユーザー情報を登録します。', sticky: true, closable: false }]);
    }, []);

    const handleBack = () => {
        navigate('/createUser');
    };

    const createConf = (e) => {
        navigate('/createUserComp');
    };

    return (
        <React.Fragment>
            <HeaderLogin />
            <Box sx={{ width: '100%',  marginTop: 5 }}>
                <Stepper activeStep={1} alternativeLabel>
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
                        <form onSubmit={createConf} className="p-fluid">
                            <Messages ref={infoMessage} />
                            <Typography variant="h6" gutterBottom>ユーザーID:{userID}</Typography>
                            <Typography variant="h6" gutterBottom>姓:{lastName}</Typography>
                            <Typography variant="h6" gutterBottom>名:{firstName}</Typography>
                            <Typography variant="h6" gutterBottom>性別:{gender}</Typography>
                            <div className="button-demo">
                                <span className="p-buttonset">
                                    <Button label="戻る" icon="pi pi-times" className="p-button-danger" onClick={handleBack} />
                                    <Button label="登録する" icon="pi pi-check" />
                                </span> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CreateUserConf;