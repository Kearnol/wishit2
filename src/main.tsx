import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import ErrorPage from './pages/error-page';

// Set up React-Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'wishlists',
        element: <div>Hi! You made it to the wishlists page!!! </div>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <Auth0Provider
            domain="dev-at6uinsfl53etukd.us.auth0.com"
            clientId="XNRFDCgiBELQ9pgWdzka9l8JvscifnjD"
            authorizationParams={{
                redirect_uri: 'https://localhost:5173/wishlists',
            }}
        >
        </Auth0Provider>
)
