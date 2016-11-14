'use strict'

const Lucid = use('Lucid')

class Topic extends Lucid {
  users () {
    return this.belongsTo('App/Model/User')
  }
  comments () {
    return this.hasMany('App/Model/Comment')
  }
}

module.exports = Topic
