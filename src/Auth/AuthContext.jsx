import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const UserContext = createContext(null);
const auth = getAuth(app);
const google = new GoogleAuthProvider();
const github = new GithubAuthProvider();
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, google);
    };

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, github);
    };

    const CreateEmailAndPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginEmailAndPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const userInfo = {
        user,
        loading,
        googleLogin,
        githubLogin,
        CreateEmailAndPass,
        loginEmailAndPass,
        resetPassword,
        logOut
    }

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;