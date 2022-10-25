import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

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


    const authInfo = { user, setUser, createUser, updateUserProfile, loginUser, googleSignin, githubSignin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;