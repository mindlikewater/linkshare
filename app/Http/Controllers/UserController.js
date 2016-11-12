'use strict'

const Hash = use('Hash')
const User = use('App/Model/User')

class UserController {
  * register (request, response) {
    let data = request.only('username', 'email', 'password')
    data.password = yield Hash.make(data.password)
    let user = yield User.create(data)
    //console.log(user);
    response.status(201).json(user)
  }

  * login (request, response) {
    //get username and password from user
    let data = request.only('username', 'password')

    try {
      //find user by username in the database
      let user = yield User.findBy('username', data.username)
      //console.log(user, data.username)

      //Note: If user is null, this TypeErrors, which is caught below.
      //Verify that the password given by the user matches the password in the database
      let verify = yield Hash.verify(data.password, user.password)
      //If password input by the user doesn't match the datbabase password, throw error
      if (!verify) { throw new Error(); }
      //generate an authorization token
      let token = yield request.auth.generate(user)
      user.access_token = token

      response.json(user)
    }
    catch (e) {
      response.status(401).json({ error: "No such user or password" })
    }
  }
}

module.exports = UserController
