import { createContext, useEffect, useState } from "react";
// import app from '../firebase/firebase.config'

import { getAuth,GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import axios from "axios";
import app from "../Firebase/firebase.init";

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
      setUser(currentUser);  // 👈 this will update displayName when user logs in or signs up
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
    

    // useEffect(()=>{
    //    const unsbuscribe =  onAuthStateChanged(auth, currentUser => {
    //         console.log('user observing');
    //         setUser(currentUser);
    //     })
    //     return ()=> unsbuscribe();
    // },[])
    

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