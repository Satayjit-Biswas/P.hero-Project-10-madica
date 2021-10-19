import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/User/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [dataComing,setDataComing] = useState(true)
    const auth = getAuth();
    // Email password 
    const handleRegistration = (e) => {
        console.log('i am reg')
        e.preventDefault()
    }
    // sign in 
    const signIngoogle = () => {
        setDataComing(true);
        const googleprovider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleprovider);
    }
    // State Changed 
    useEffect(()=>{
        const notsubscibed = onAuthStateChanged(auth,user => {
            if (user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setDataComing(false);
            
        })
        return() => notsubscibed;
    },[])

    // log out 
    const logOut = () =>{
        setDataComing(true);
        signOut(auth)
        .then(() => {
        })
        .finally(() => setDataComing(false));
    }
    return {
        user,
        signIngoogle,
        logOut,
        dataComing,
        handleRegistration
    }
}

export default useFirebase;