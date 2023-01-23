import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import App from './App'
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
