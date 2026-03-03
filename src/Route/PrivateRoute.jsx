import React, { use } from 'react';
import { AuthContext } from '../ProViderr/AuthenPro';
import { Navigate, useLocation } from 'react-router';
import Loadingz from '../Layout/Loadingz';

const PrivateRoute = ({ children }) => {
    // if user exist return the full news child.

    let { usser, loading } = use(AuthContext)
    // console.log(usser, loading)
    let location = useLocation()
    // console.log(location);

    if(loading) {
        return     <Loadingz></Loadingz>
        }

    if (usser && usser?.email) {
        return (
            <div>
                <p className="">this is from private route</p>
                {children}
            </div>
        );
    }
     // if user not logged-in back to login page.
     return (<Navigate state={location.pathname} to="/authen/login" ></Navigate>) 


    
};

export default PrivateRoute;