const users = require('./users.json')

function getAllUsers() {
    return users
}

function returnUser(id){
    const user = users.filter(obj => obj.id === id)
    return user[0]
  }

// module.exports = getAllUsers

module.exports = {
    getAllUsers: getAllUsers,
    returnUser : returnUser
}