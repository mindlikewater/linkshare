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
  topics () {
    return this.hasMany('App/Model/Topic')
  }
}

module.exports = User
