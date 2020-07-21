const argv = require(`yargs`)
    .command(`crear`, `Crea una tarea por hacer`, {
        descripcion: {
            alias: `d`,
            demand: true,
            desc: `Descripcion de la tarea por hacer`
        }
    })
    .command(`actualizar`, `Actualiza una tarea por hacer`, {
        descripcion: {
            alias: `d`,
            demand: true,
            desc: `Descripcion de la tarea por hacer`
        },
        completado: {
            alias: `c`,
            demand: true,
            desc: `Marca como completado o pendiente la tarea`
        }
    })
    .command(`borrar`, `Elimina una tarea`, {
        descripcion: {
            alias: `d`,
            demand: true,
            desc: `Descripcion de la tarea por hacer`
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}