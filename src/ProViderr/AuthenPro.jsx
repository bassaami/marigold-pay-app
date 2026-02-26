import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../firebase.config"
// import { AuthContext } from './AuthContext';

export const AuthContext = createContext()

const auth = getAuth(app);

const AuthenPro = ({ children }) => {

    const [usser, setUser] = useState(null)

    const [loading, setLoading] = useState(true)
    // console.log(usser, loading)

    let createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    let LogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (presenTuser) => {

            setUser(presenTuser);
            setLoading(false);
        })

        return () => {
            unSubscribe()
        }

    }, [])

    let updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)

    }

    let LogOutt = () => {
        return signOut(auth)
    }


    const authData = {
        usser, setUser, createUser, LogIn, LogOutt, loading, setLoading,
        updateUser,
    }

    return <AuthContext value={authData}>   {children} </AuthContext>
};

export default AuthenPro;