import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useAuth } from 'src/contexts/AuthContext';

export default function LoginRedirect() {
    const { currentUser } = useAuth();
    const { handleLoginLink } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (currentUser) {
            navigate('/wishlists');
        }
        handleLoginLink();
    }, [currentUser]);
    return <CircularProgress color="primary" />;
}
