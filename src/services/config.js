import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5SLBnUL3WOpTq_uifaxkoO93crwEMbLs",
  authDomain: "ondheros.firebaseapp.com",
  projectId: "ondheros",
  storageBucket: "ondheros.firebasestorage.app",
  messagingSenderId: "39374650849",
  appId: "1:39374650849:web:f56b796b056070febd66a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

/////////////////// ////

const misRemeras = [
    {id: 1, nombre: "Bart", precio: 20000, img:"../public/Ondheros-img/bartypayaso.jpg", categoria: "remeras", stock: 10},
    {id: 2, nombre: "Betty Boop", precio: 20000, img:"../public/Ondheros-img/betty.jpg", categoria: "remeras", stock: 10},
    {id: 3, nombre: "Majin Bu", precio: 20000, img:"../public/Ondheros-img/buu.jpg", categoria: "remeras", stock: 10},
    {id: 4, nombre: "X-Men", precio: 20000, img:"../public/Ondheros-img/comicmarvel.jpg", categoria: "remeras", stock: 10},
    {id: 5, nombre: "Los 4 Fantasticos", precio: 20000, img:"../public/Ondheros-img/cuatrofantasticos.jpg", categoria: "remeras", stock: 10},
    {id: 6, nombre: "Deadpool", precio: 20000, img:"../public/Ondheros-img/dead.jpg", categoria: "remeras", stock: 10},
    {id: 7, nombre: "El Eternauta", precio: 20000, img:"../public/Ondheros-img/eleternauta.jpg", categoria: "remeras", stock: 10},
    {id: 8, nombre: "Frezzer", precio: 20000, img:"../public/Ondheros-img/frezzervillano.jpg", categoria: "remeras", stock: 10},
    {id: 9, nombre: "Goku", precio: 20000, img:"../public/Ondheros-img/goku.jpg", categoria: "remeras", stock: 10},
    {id: 10, nombre: "Dragon Ball", precio: 20000, img:"../public/Ondheros-img/gokupeke.jpg", categoria: "remeras", stock: 10},
    {id: 11, nombre: "Los Simpsons", precio: 20000, img:"../public/Ondheros-img/inspector.jpg", categoria: "remeras", stock: 10},
    {id: 12, nombre: "Jem", precio: 20000, img:"../public/Ondheros-img/jemy.jpg", categoria: "remeras", stock: 10},
    {id: 13, nombre: "Lisa", precio: 20000, img:"../public/Ondheros-img/lareinalisa.jpg", categoria: "remeras", stock: 10},
    {id: 14, nombre: "Tortugas Ninjas", precio: 20000, img:"../public/Ondheros-img/lastortu.jpg", categoria: "remeras", stock: 10},
    {id: 15, nombre: "Los Simpsons", precio: 20000, img:"../public/Ondheros-img/locagatos.jpg", categoria: "remeras", stock: 10},
    {id: 16, nombre: "Osito carinito", precio: 20000, img:"../public/Ondheros-img/ositocarinito.jpg", categoria: "remeras", stock: 10},
    {id: 17, nombre: "Punisher", precio: 20000, img:"../public/Ondheros-img/punisher.jpg", categoria: "remeras", stock: 10},
    {id: 18, nombre: "Sailor Moon", precio: 20000, img:"../public/Ondheros-img/saynormoon.jpg", categoria: "remeras", stock: 10},
    {id: 19, nombre: "Sailor Moon", precio: 20000, img:"../public/Ondheros-img/saynor.jpg", categoria: "remeras", stock: 10},
    {id: 20, nombre: "Spiderman", precio: 20000, img:"../public/Ondheros-img/spiderman.png", categoria: "remeras", stock: 10},
    {id: 21, nombre: "Tom y Daly", precio: 20000, img:"../public/Ondheros-img/tomyda.jpg", categoria: "remeras", stock: 10},
    {id: 22, nombre: "Venom", precio: 20000, img:"../public/Ondheros-img/Venom.png", categoria: "remeras", stock: 10},
    {id: 23, nombre: "Volver al Futuro", precio: 20000, img:"../public/Ondheros-img/volveralfutu.jpg", categoria: "remeras", stock: 10},
    {id: 24, nombre: "Wolverine", precio: 20000, img:"../public/Ondheros-img/wolvering.jpg", categoria: "remeras", stock: 10},
    {id: 25, nombre: "X-Men", precio: 20000, img:"../public/Ondheros-img/xmen.jpg", categoria: "remeras", stock: 10},
    {id: 26, nombre: "X-Men", precio: 20000, img:"../public/Ondheros-img/xmencomic.jpg", categoria: "remeras", stock: 10},
    {id: 27, nombre: "Kang y Kodos", precio: 20000, img:"../public/Ondheros-img/kangykodos.jpg", categoria: "remeras", stock: 10},
    {id: 28, nombre: "Troy McClure", precio: 20000, img:"../public/Ondheros-img/TroyMcClure..jpg", categoria: "remeras", stock: 10},
    {id: 29, nombre: "Batman", precio: 10000, img:"../public/Ondheros-img/billeteraBatman.jpg", categoria: "billeteras", stock: 5},
    {id: 30, nombre: "Dragon Ball", precio: 10000, img:"../public/Ondheros-img/dragonBilletera.jpg", categoria: "billeteras", stock: 5},
    {id: 31, nombre: "Marvel", precio: 10000, img:"../public/Ondheros-img/billeteraMarvel.jpg", categoria: "billeteras", stock: 5},
    {id: 32, nombre: "DeadPool", precio: 5000, img:"../public/Ondheros-img/deadpoolMedias.jpg", categoria: "medias", stock: 15},
    {id: 33, nombre: "Dragon Ball Z", precio: 5000, img:"../public/Ondheros-img/DragonMedias.jpg", categoria: "medias", stock: 15},
    {id: 34, nombre: "Mujer Maravilla", precio: 5000, img:"../public/Ondheros-img/mediasmujerM.jpg", categoria: "medias", stock: 15},
    {id: 35, nombre: "Marvel", precio: 5000, img:"../public/Ondheros-img/mediasMarvel.webp", categoria: "medias", stock: 15},
]

import { collection, doc, writeBatch } from "firebase/firestore"


const subirProductos = async () => {
  const batch = writeBatch(db); // Crear un batch
  const productosRef = collection(db, "productos"); // Referencia a la colección

  // Recorre el array de productos
  misRemeras.forEach((producto) => {
    const nuevoDoc = doc(productosRef); // Crea un nuevo documento con un ID automático
    batch.set(nuevoDoc, producto); // Agrega la operación de escritura al batch
  });

  // Ejecuta el batch
  try {
    await batch.commit();
    console.log("Productos subidos exitosamente");
  } catch (error) {
    console.error("Error subiendo productos: ", error);
  }
};

//subirProductos()