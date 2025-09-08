const misRemeras = [
    {id: 1, nombre: "Bart", precio: 20000, img:"../public/Ondheros-img/bartypayaso.jpg"},
    {id: 2, nombre: "Betty Boop", precio: 20000, img:"../public/Ondheros-img/betty.jpg"},
    {id: 3, nombre: "Majin Bu", precio: 20000, img:"../public/Ondheros-img/buu.jpg"},
    {id: 4, nombre: "X-Men", precio: 20000, img:"../public/Ondheros-img/comicmarvel.jpg"},
    {id: 5, nombre: "Los 4 Fantasticos", precio: 20000, img:"../public/Ondheros-img/cuatrofantasticos.jpg"},
    {id: 6, nombre: "Deadpool", precio: 20000, img:"../public/Ondheros-img/dead.jpg"},
    {id: 7, nombre: "El Eternauta", precio: 20000, img:"../public/Ondheros-img/eleternauta.jpg"},
    {id: 8, nombre: "Frezzer", precio: 20000, img:"../public/Ondheros-img/frezzervillano.jpg"},
    {id: 9, nombre: "Goku", precio: 20000, img:"../public/Ondheros-img/goku.jpg"},
    {id: 10, nombre: "Dragon Ball", precio: 20000, img:"../public/Ondheros-img/gokupeke.jpg"},
    {id: 11, nombre: "Los Simpsons", precio: 20000, img:"../public/Ondheros-img/inspector.jpg"},
    {id: 12, nombre: "Jem", precio: 20000, img:"../public/Ondheros-img/jemy.jpg"},
    {id: 13, nombre: "Lisa", precio: 20000, img:"../public/Ondheros-img/lareinalisa.jpg"},
    {id: 14, nombre: "Tortugas Ninjas", precio: 20000, img:"../public/Ondheros-img/lastortu.jpg"},
    {id: 15, nombre: "Los Simpsons", precio: 20000, img:"../public/Ondheros-img/locagatos.jpg"},
    {id: 16, nombre: "Osito carinito", precio: 20000, img:"../public/Ondheros-img/ositocarinito.jpg"},
    {id: 17, nombre: "Punisher", precio: 20000, img:"../public/Ondheros-img/punisher.jpg"},
    {id: 18, nombre: "Sailor Moon", precio: 20000, img:"../public/Ondheros-img/saynormoon.jpg"},
    {id: 19, nombre: "Sailor Moon", precio: 20000, img:"../public/Ondheros-img/saynor.jpg"},
    {id: 20, nombre: "Spiderman", precio: 20000, img:"../public/Ondheros-img/spiderman.png"},
    {id: 21, nombre: "Tom y Daly", precio: 20000, img:"../public/Ondheros-img/tomyda.jpg"},
    {id: 22, nombre: "Venom", precio: 20000, img:"../public/Ondheros-img/Venom.png"},
    {id: 23, nombre: "Volver al Futuro", precio: 20000, img:"../public/Ondheros-img/volveralfutu.jpg"},
    {id: 24, nombre: "Wolverine", precio: 20000, img:"../public/Ondheros-img/wolvering.jpg"},
    {id: 25, nombre: "X-Men", precio: 20000, img:"../public/Ondheros-img/xmen.jpg"},
    {id: 26, nombre: "X-Men", precio: 20000, img:"../public/Ondheros-img/xmencomic.jpg"},
    {id: 27, nombre: "Kang y Kodos", precio: 20000, img:"../public/Ondheros-img/kangykodos.jpg"},
    {id: 28, nombre: "Troy McClure", precio: 20000, img:"../public/Ondheros-img/TroyMcClure..jpg"},
]

 export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misRemeras)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misRemeras.find(item => item.id === id)
            resolve(producto)
        }, 2000)
    })
}