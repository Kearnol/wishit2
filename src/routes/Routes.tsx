import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import AllWishlistsPage from 'pages/Wishlists';
import ErrorPage from 'pages/Error/ErrorPage';
import LoginPage from 'pages/Login';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import LoginRedirect from 'components/Common/LoginRedirect/LoginRedirect';
import WishlistsPage from 'pages/Wishlists';
import AddWishlistForm from 'components/Wishlists/AddWishlist';

const wishlistSubRoutes = [
    {
        path: 'all',
        element: <AllWishlistsPage />,
    },
    {
        path: 'add',
        element: <AddWishlistForm />,
    },
];

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
                path: 'confirmLogin',
                element: <LoginRedirect />,
            },
            {
                path: 'wishlists',
                element: <PrivateRoute component={WishlistsPage} />,
                children: wishlistSubRoutes,
            },
        ],
    },
    {},
]);

function Routes() {
    return <RouterProvider router={router} />;
}

export default Routes;
