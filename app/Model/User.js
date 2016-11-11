'use strict'

const Lucid = use('Lucid')
const Token = use('App/Model/Token')

class User extends Lucid {

  static get hidden () {
    return ['password']
  }
  apiTokens () {
    return this.hasMany(Token)
  }
}

module.exports = User
