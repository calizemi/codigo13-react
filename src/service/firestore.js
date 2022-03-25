// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Ky9eOVw3nZ6t-7Igter0rk6zYfqNHZ0",
  authDomain: "codigo13-88c18.firebaseapp.com",
  projectId: "codigo13-88c18",
  storageBucket: "codigo13-88c18.appspot.com",
  messagingSenderId: "1076934602059",
  appId: "1:1076934602059:web:d3a19bac400ce67b9b4cce",
  measurementId: "G-9GZNEWJCZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Iniciar firestore
// database : base de datos
const db = getFirestore(app);

// Hacer la peticion para poder traer los productos
export const getProductClothes = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionClothes = collection(db, "product_clothes");
  // paso 2: Traer los documentos
  const documentClothes = await getDocs(collectionClothes);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const clothes = documentClothes.docs.map((doc) => doc.data());
  return clothes;
};
