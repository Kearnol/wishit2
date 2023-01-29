import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import WishlistsPage from '../components/wishlist'
import ErrorPage from '../pages/error-page'
import LoginPage from '../pages/Login'

// Set up React-Router
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'wishlists',
                element: <WishlistsPage />,
            },
        ],
    },
])

function Routes() {
    return <RouterProvider router={router} />
}

export default Routes
