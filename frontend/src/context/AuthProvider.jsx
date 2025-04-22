import { createContext, useEffect, useState } from "react";
// import app from '../firebase/firebase.config'

import { getAuth,GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import axios from "axios";
import app from "./Firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // const providerLogin = (provider) => {
    //     return signInWithPopup(auth, provider);
    // }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (name) => {
        if (auth.currentUser) {
          return updateProfile(auth.currentUser, {
            displayName: name,
          });
        }
        return Promise.reject("No user found");
      };
    
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  //   this will update displayName when user logs in or signs up
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
    

    const logOut =()=>{
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        signIn,
        signInGoogle,
        updateUserProfile,
        logOut,
        // email,
        user,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;