import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from 'primereact/button';
import HeaderLogin from '../components/Header_Login';

const Logout = () => {
    const navigate = useNavigate();

    const handleToLogin = () => {
        navigate('/');
    };

    return (
        <React.Fragment>
            <HeaderLogin />
            <Box sx={{ marginTop: 5 }}>
                <div className="form-demo">
                    <div className="p-d-flex p-jc-center">
                        <div className="card p-fluid">
                            <Typography className="p-text-center" variant="h5" component="div" gutterBottom>
                                ログアウトしました。
                            </Typography>
                            <div className="button-demo">
                                <Button label="ログイン画面へ" icon="pi pi-check" onClick={handleToLogin} />
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </React.Fragment>
    );
}

export default Logout;