import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/contexts/AuthContext';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function LoginPage() {
    const [email, setEmail] = React.useState('');
    const { sendLoginLink } = useAuth();

    const handleSendLink = () => {
        sendLoginLink(email);
    };

    return (
        <Box component="form" noValidate autoComplete="off">
            <TextField
                helperText="Email Address"
                id="standard-basic"
                label="Login with Email"
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="contained" onClick={handleSendLink}>
                Get Login Link
            </Button>
        </Box>
    );
}

export default LoginPage;
