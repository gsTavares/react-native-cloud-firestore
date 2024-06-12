import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJDS6tDFiAS816LYgUrk2XI6Tot4TD_Jg",
    authDomain: "app-crud-produto-23e0e.firebaseapp.com",
    projectId: "app-crud-produto-23e0e",
    storageBucket: "app-crud-produto-23e0e.appspot.com",
    messagingSenderId: "373201261547",
    appId: "1:373201261547:web:bf6fb724c70c36829b7fae"
};

const app = initializeApp(firebaseConfig);

const cloudFirestore = getFirestore(app);

export { cloudFirestore };