import { createContext, useEffect, useState } from "react";
// import app from '../firebase/firebase.config'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import axios from "axios";
import app from "../Firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)
    
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile = (name,photo)=>{
        console.log(name)
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL:photo
            
            
        })
        
    }
    

    useEffect(()=>{
       const unsbuscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
        })
        return ()=> unsbuscribe();
    },[])

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
    //         console.log('current user', currentUser);

    //         // get and set token
    //         if(currentUser){
    //             axios.post('http://localhost:5000/jwt', {email: currentUser.email})
    //             .then(data =>{
    //                 console.log(data.data.token)
    //                 localStorage.setItem('access-token', data.data.token)
    //                 setLoading(false);
    //             })
    //         }
    //         else{
    //             localStorage.removeItem('access-token')
    //         }

            
    //     });
    //     return () => {
    //         return unsubscribe();
    //     }
    // }, [])

    const logOut =()=>{
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        signIn,
        updateUserProfile,
        logOut,
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