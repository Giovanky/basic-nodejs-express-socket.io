const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
  }, completed = {
    default: true,
    alias: 'c',
    desc: 'Cambia el estado de la tarea (completada o pendiente)'
  }
  
  const argv = require('yargs')
    .command('create', 'Crea una tarea por hacer', { description })
    .command('read', 'Lee todas las tareas por hacer')
    .command('update', 'Actualiza el estado de una tarea', { description, completed })
    .command('delete', 'Borra una tarea de la lista', { description })
    .help()
    .argv
  
  module.exports = { argv }