import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import Routes from './routes/Routes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-at6uinsfl53etukd.us.auth0.com"
            clientId="XNRFDCgiBELQ9pgWdzka9l8JvscifnjD"
            authorizationParams={{
                redirect_uri: 'https://localhost:5173/wishlists',
            }}
        >
            <Routes />
        </Auth0Provider>
    </React.StrictMode>
)
