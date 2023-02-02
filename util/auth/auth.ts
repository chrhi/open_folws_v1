import { create } from 'zustand'
import { getAuth  , createUserWithEmailAndPassword ,
   signInWithEmailAndPassword , signOut , GoogleAuthProvider , getRedirectResult, 
   signInWithRedirect
  } from "firebase/auth";
import {app} from "../../config/firebase"
import Cookies from 'js-cookie';

const auth = getAuth(app)

const provider = new GoogleAuthProvider()


type User = {
    id:string | number ,
    name : string ,
    email :string
} | undefined

export const useAuthAbdullah = create((set) => ({
    user: {} ,
    //this function will handle the log out functionality
    login: async (email:string , password :string) => {
    
    const userCredential = await signInWithEmailAndPassword(auth , email , password).catch(err => console.log(err.message))
    if(userCredential?.user){
        Cookies.set('auth', userCredential?.user.uid! );
      }
    },
   //this one will handle the creation of new user
    create_user : async (email :string , password :string) => {
        //todo create user
       const userCredential = await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
        console.log(error.message)
      })
    
      set({user :  userCredential?.user} )
      if(userCredential?.user){
        Cookies.set('auth', userCredential?.user.uid! );
      }
    }, 

    logout:async () => {
        await signOut(auth).catch(error => console.error(error.message))
        set({ user: {}})
        Cookies.remove('auth');
    },

    googleProvider :  () =>{
      signInWithRedirect(auth, provider);
      getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result!);
    const token = credential?.accessToken;
   // Cookies.set('auth', result?.user.uid! );
    // The signed-in user info.
    const user = result?.user;
    console.log(result)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }
        
  })
  
  )