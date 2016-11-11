'use strict'

const Hash = use('Hash')
const User = use('App/Model/User')

class UserController {
  * register (request, response) {
    let data = request.only('username', 'email', 'password')
    data.password = yield Hash.make(data.password)
    let user = yield User.create(data)

    response.status(201).json(user)
  }

  * login (request, response) {
    let data = request.only('username', 'password')
    let user = yield User.findBy('username', data.username)

    try {
      //Note: If user is nul, this TypeErrors, which is caught below.
      let verify = yield Hash.verify(data.password, user.password)
      if (!verify) { throw new Error(); }

      let token = yield request.auth.generate(user)
      user.access_token = Token

      response.json(user)
    }
    catch (e) {
      response.status(401).json({ error: "No such user or password"})
    }
  }

  * auth_test (request, response) {
    let user = request.authUser

    console.log(request.authUser)
    response.json(user)
  }
}

module.exports = UserController
