import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    onSnapshot
}
from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";


const firebaseConfig = {

    apiKey: "AIzaSyCAFi_clhV0PoxxzLteyGzIRrvgdEHnG4A",

    authDomain: "vales-victor.firebaseapp.com",

    projectId: "vales-victor",

    storageBucket: "vales-victor.firebasestorage.app",

    messagingSenderId: "167849044880",

    appId: "1:167849044880:web:2cbcaf6ad085269209e115"

};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


const documento = doc(db, "vales", "estado");


export async function guardarSellosFirebase(lista){

    await setDoc(documento,{
        sellos:lista
    });

}


export async function cargarSellosFirebase(){

    const snap = await getDoc(documento);

    if(snap.exists()){

        return snap.data().sellos;

    }

    return [];

}


export function escucharCambios(callback){

    onSnapshot(documento,(snap)=>{

        if(!snap.exists()) return;

        callback(snap.data().sellos);

    });

}