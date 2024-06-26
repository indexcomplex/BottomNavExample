import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVlMBWtjh7tMXTV2PEqULPb7O2KqCUNQo",
  authDomain: "bottomnavexample-a5cc7.firebaseapp.com",
  databaseURL: "https://bottomnavexample-a5cc7-default-rtdb.firebaseio.com",
  projectId: "bottomnavexample-a5cc7",
  storageBucket: "bottomnavexample-a5cc7.appspot.com",
  messagingSenderId: "272430577943",
  appId: "1:272430577943:web:53ea5f78160be47818df52",
  measurementId: "G-SPCQ5GY02P"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
