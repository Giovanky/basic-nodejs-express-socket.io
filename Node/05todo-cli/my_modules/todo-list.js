const fs = require('fs'),
  path = require('path'),
  todoData = path.join(__dirname, 'todo-data.json')

let todos = []

const loadData = () => {
  try {
    todos = require(todoData)
  } catch (err) {
    todos = []
  }
}

const saveData = () => {
  let data = JSON.stringify(todos)

  fs.writeFile(todoData, data, err => {
    if (err) throw new Error('No se pudo guardar la tarea', err)
  })
}

const create = description => {
  loadData()
  let toDo = {
    description,
    completed: false
  }

  todos.push(toDo)
  saveData()
  return 'Tarea creada'
}

const read = () => {
  loadData()
  return todos
}

const update = (description, completed = true) => {
  loadData()

  let index = todos.findIndex(todo => todo.description === description)

  if (index >= 0) {
    todos[index].completed = JSON.parse(completed)
    saveData()
    return 'Tarea actualizada'
  } else {
    return 'No existe la tarea'
  }
}

const del = description => {
  loadData()

  let newTodos = todos.filter(todo => todo.description !== description)

  if (todos.length === newTodos.length) {
    return 'No existe tarea'
  } else {
    todos = newTodos
    saveData()
    return 'Tarea eliminada'
  }
}

module.exports = {
  create,
  read,
  update,
  del
}