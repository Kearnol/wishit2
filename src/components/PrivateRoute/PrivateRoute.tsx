import React from 'react';
import { auth } from 'src/lib/firebase';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
    component: React.ComponentType;
};
export default function PrivateRoute({
    component: Component,
}: PrivateRouteProps) {
    const { currentUser } = auth;
    console.log({ currentUser });
    // Commented for easier development
    // return currentUser ? <Component /> : <Navigate to="/login" />;
    return <Component />;
}
