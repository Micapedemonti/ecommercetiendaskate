// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig ={
	apiKey: "AIzaSyBat7-6Hf5VmqHisBaOJShMoWttn47J0-Q",
	authDomain: "ecommerce-b4656.firebaseapp.com",
	projectId: "ecommerce-b4656",
	storageBucket: "ecommerce-b4656.appspot.com",
	messagingSenderId: "271710016921",
	appId: "1:271710016921:web:e3b90ea4a639ed3bcbaf08"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);