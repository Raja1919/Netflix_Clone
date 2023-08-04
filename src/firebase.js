import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCVFPH0BGYOc6oRHSvG1YPX1nJszn8ZUmQ",
    authDomain: "netflix-clone-6a9f1.firebaseapp.com",
    projectId: "netflix-clone-6a9f1",
    storageBucket: "netflix-clone-6a9f1.appspot.com",
    messagingSenderId: "287422709178",
    appId: "1:287422709178:web:c8fcb4f77b313474aaf183"
  };
  
  const app=initializeApp(firebaseConfig)
  const auth=getAuth()
  const db=getFirestore()



export {app,auth,db};