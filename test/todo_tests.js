const assert = require('assert')
const todos = require('../controllers/todos_controller.js')

// // Use Assert to Test the functionality of all your CRUD methods e.g.
// CREATE function
// Should be able to create a new Todo with the following KVPs (Key-Value Pairs) in the params object
var list1 = {name: 'Home', description: 'To complete homework by 9pm', completed: false}
var list2 = {name: 'Homework', description: 'To complete homework by 9pm', completed: false}
var list3 = {description: 'To complete homework by 9pm', completed: false}
assert.deepStrictEqual(todos.create(list1), false, 'Length of name should be more than 5 character')
assert.deepStrictEqual(todos.create(list2), true, 'Object not created')
assert.deepStrictEqual(todos.create(list3), false, 'Name value not supplied')

// READ Function
// Testing the list  function
assert.ok(todos.list().length > 0, 'List should return an array of all todos')
// Testing the show id function
// Should return the Todo Object with the specified id
var objID = todos.list()[0]._id
var object = todos.list()[0]
// check if can return object if found
assert.deepStrictEqual(todos.show(objID), object, 'List should return object if id exists')
// return null
assert.strictEqual(todos.show('45679'), null, 'List should return null if no TODO with that id exists')

// UPDATE function
var updatedObj = {
 name: 'Dinner',
 description: 'Dinner at ION',
 completed: false
}

var firstObjId = todos.list()[0]['_id']

assert.strictEqual(todos.update(firstObjId, updatedObj), true, 'Object with unique ID is not updated'
)
var shortName = {
 name: 'die',
 description: 'Do not die',
 completed: false
}
assert.strictEqual(todos.update(firstObjId, shortName), false, 'Updated parameter name value should be at least 5 characters long.'
)
// DESTROY function
// check if can return object if found
assert.deepStrictEqual(todos.destroy(objID), true, 'List should remove object if id exists')
// return null
assert.strictEqual(todos.destroy('45679'), false, 'Id is not found thus object is not deleted')
// DESTROY ALL
todos.create(list2)
todos.create(list2)
todos.destroyAll()
assert.ok(todos.list().length === 0, 'Destroy All should have no object in todos')
