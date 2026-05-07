import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc,doc } from "firebase/firestore";
//import { doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDPvQVVklV0rHUhH1U9SVg_aG2z-690S74",
  authDomain: "chat-app-925ae.firebaseapp.com",
  projectId: "chat-app-925ae",
  storageBucket: "chat-app-925ae.firebasestorage.app",
  messagingSenderId: "123640256370",
  appId: "1:123640256370:web:7607123adf63a8034eafeb",
  measurementId: "G-KX0KX1H9TG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);
const db  = getFirestore(app);
const storage = getStorage(app);

const signup = async (username,email,password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password);
    // console.log("RESpose create with email and pass:",res);
    const user  = res.user;
    // console.log("User A rha:",user);
    await setDoc(doc(db,"users",user.uid), {
      id:user.uid,
      username: username.toLowerCase(),
      email,
      name:"",
      avatar:"",
      bio:"Hay, There i am using chat app",
      lastSeen:Date.now()
    });
    await setDoc(doc(db,"chats",user.uid), {
      chatData:[],
    })
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const login = async (email,password) => {
  try {
    await signInWithEmailAndPassword(auth,email,password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}


export {
  signup,
  login,
  logout,
  auth,
  db,
  storage
}