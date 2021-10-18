import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/User/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () =>{
    const [users,setUsers] = useState({});

    const auth = getAuth();
    // sign in 
    const signIngoogle = ()=>{
        const googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                setUsers(result.user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
    // State Changed 
    useEffect(()=>{
        const notsubscibed = onAuthStateChanged(auth,user => {
            if (users){
                setUsers(users)
            }
            else{
                setUsers({})
            }
        })
        return() => notsubscibed;
    },[])

    // log out 
    const logOut = () =>{
        signOut(auth)
        .then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return {
        users,
        signIngoogle,
        logOut
    }
}

export default useFirebase;