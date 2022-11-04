import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoader] = useState(true);


    const signUP = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        setLoader(true);
        signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => unsubscribe();
    }, [])
    const authInfo = { user, loading, signUP, signIn, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;