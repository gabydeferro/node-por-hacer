const fs = require(`fs`);

let listadoPorHacer = [];

const cargarDB = () => {

    try {
        listadoPorHacer = require(`./database/data.json`);
    } catch {
        listadoPorHacer = [];

    }
}

const guardaDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`database/data.json`, data, (err) => {

        if (err) console.log(err);

        return console.log(`Comando exitoso`);
    });
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardaDB();

    return porHacer;
}

const getListado = () => {

    cargarDB();

    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();
        return console.log(`Se actualizo la tarea correctamente`);
    } else {
        return console.log(`No se encontro la tarea para actualizar`);
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    if (listadoPorHacer.length === nuevoListado.length) {
        return console.log(`No se encontro la tarea a eliminar`);
    } else {
        listadoPorHacer = nuevoListado;
        guardaDB();
        return console.log(`Tarea borrada con exito`);


    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}