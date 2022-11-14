
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMyf-wCh0oiVruW1JjE_YC77JVQ0X33L8",
  authDomain: "ecommerce-02-5cd44.firebaseapp.com",
  projectId: "ecommerce-02-5cd44",
  storageBucket: "ecommerce-02-5cd44.appspot.com",
  messagingSenderId: "394884767119",
  appId: "1:394884767119:web:20b337ae925585d0a67ffa"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);