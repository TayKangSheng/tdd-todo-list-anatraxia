const uuidGenerator = require('uuid/v4')
const fs = require('fs')

const todos = []
// // the following line will instead load the todos from a json file when the app starts
// const todos = require('../data.json')

// // The following function can be used to save the todos array to the json data file
// function save () {
//   const json = JSON.stringify(todos)
//   fs.writeFileSync('data.json', json, 'utf8')
// }

// CREATE - params should be an object with keys for name, description and completed
function create (params) {
  if (params.hasOwnProperty('name') === false) {
    return false
  } else {
    if (params.name.length < 5 || params.name.length === 0) {
      return false
    } else {
    // add param to todos array
      if (params.description.length === 0) {
        params.description = params.name
      }
      params.completed = false
      var id = uuidGenerator()
    // params['_id'] = id
      params['_id'] = id
      todos.push(params)
      return true
    }
  }
}

// READ (list & show)
function list () {
  // return list of all TODOs
  return todos
}
function show (id) {
  // find the TODO with this id
  for (var i = 0; i < todos.length; i++) {
    if (todos[i]._id === id) {
      return todos[i]
    }
  }
  return null
}

// UPDATE - params should be an object with KVPs for the fields to update
function update (id, params) {
  if (params.name.length < 5) {
    return false
  }
  for (var i = 0; i < todos.length; i++) {
    if (todos[i]['_id'] === id) {
      todos[i].name = params.name
      todos[i].description = params.description
      todos[i].completed = params.completed
      return true
    }
  }
  return false
}

// DESTROY (destroy & destroyAll)
function destroy (id) {
  // find the TODO with this id
  for (var i = 0; i < todos.length; i++) {
    if (todos[i]._id === id) {
      todos.splice(i, 1)
      return true
    }
  }
  return false
}

// DESTROY (destroy & destroyAll)
function destroyAll () {
  for (var i = todos.length - 1; i >= 0; i--) {
    todos.pop()
  }
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  destroyAll
}
