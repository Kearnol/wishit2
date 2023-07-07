import ReactDOM from 'react-dom/client';
import Routes from './routes/Routes';
import theme from './utils/theme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';

// Load environment variables

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={theme}>
        <CssBaseline>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </CssBaseline>
    </ThemeProvider>
);
