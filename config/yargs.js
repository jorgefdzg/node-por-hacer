const completado = {
    alias: 'c',
    default: true
};
const descripcion = {
    demand: true,
    alias: 'd'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra una tarea de la base de datos', {
        descripcion
    })
    .help().argv;

module.exports = {
    argv
}