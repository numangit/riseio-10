import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div class="spinner-border m-5" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    }

    if (!user) {
        return <Navigate to="/SigninPage" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;