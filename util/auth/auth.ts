import { create } from 'zustand'
import { getAuth  , createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut } from "firebase/auth";
import {app} from "../../config/firebase"
import Cookies from 'js-cookie';

const auth = getAuth(app)
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
        
  })
  
  )