//   console.log(users)

const users = require('./users.json')
// const allUsers = require('./returnUser')
const returnFunctions = require('./returnUser')

//write a function that returns all users...



// console.log(returnUser(8))

function returnUser2(email){
    const user = users.filter(obj => obj.email === email)
    return user[0]
}

// console.log(returnUser2("lcollishaw2@google.com"))

//Return users with "google.com" email addresses

function returnUsers(){
   return users.filter(obj => obj.email.includes('google.com'))
}

// console.log(returnUsers())

function returnUsers2(str){
    return users.filter(obj => obj.email.includes(str))
}

// console.log(returnUsers2('msn'))

//write a function that find all users whose name starts with letter A

function returnUsers3(){
    return users.filter(obj => obj.first_name[0].includes('A'))
}

// console.log(returnUsers3())
// console.log(allUsers())

console.log('fred')