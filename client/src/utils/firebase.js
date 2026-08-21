
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-3fc66.firebaseapp.com",
  projectId: "examnotesai-3fc66",
  storageBucket: "examnotesai-3fc66.firebasestorage.app",
  messagingSenderId: "549868605364",
  appId: "1:549868605364:web:6b8782228aa4a1c8966ce1"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}