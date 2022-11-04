import React, { useContext } from 'react';
import { AuthContext } from '../contextAPI/UserContext';
import SignIn from '../pases/SignIn/SignIn';

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <h2 className="text-3xl">Loading....</h2>
    };
    if (user?.email) {
        return children;
    }
    else {
        return <SignIn></SignIn>
    }
};

export default PrivetRouter;