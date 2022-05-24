import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import useUser from '../../hooks/useUser';
import Loading from '../Loading/Loading';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [fetchedUser,fetchedLoading] = useUser(user);
    const location = useLocation();
    const isAdmin = fetchedUser?.isAdmin;
    

    if(loading || fetchedLoading){
        return <Loading></Loading>
    }

    if(!user || !isAdmin){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;