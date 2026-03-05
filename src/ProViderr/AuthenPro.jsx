import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase.config"
// import { AuthContext } from './AuthContext';

export const AuthContext = createContext()

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); // Initialize Provider

const AuthenPro = ({ children }) => {

    // Inside your AuthenPro component
    const [balance, setBalance] = useState(15000); // Set initial balance

    const [paidBillIds, setPaidBillIds] = useState([]);

    const payBill = (billId, amount) => {
        setBalance((prev) => prev - amount);
        // Add the bill ID to the paid list
        setPaidBillIds((prev) => [...prev, billId]);
    };

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
    let resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
};
    // --- New Google Login Function ---
    let googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

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
        updateUser, balance, payBill, paidBillIds, googleLogin, resetPassword
    }

    return <AuthContext value={authData}>   {children} </AuthContext>
};

export default AuthenPro;