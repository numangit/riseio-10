import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);
    console.log(user);

    // onAuthstatechange
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setUser(currentUser);
    //         setLoading(false);
    //     });
    //     return () => {
    //         unsubscribe();
    //     }
    // }, [])

    // sing up with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // update/set user name and picture
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    //login with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //login with google popup
    const googleProvider = new GoogleAuthProvider();
    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //login with github popup
    const githubProvider = new GithubAuthProvider();
    const githubSignin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // signout
    const signoutUser = () => {
        return signOut(auth)
    }


    const authInfo = { user, setUser, createUser, updateUserProfile, loginUser, googleSignin, githubSignin, signoutUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;