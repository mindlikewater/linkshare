'use strict'

const Lucid = use('Lucid')

class Topic extends Lucid {
  return this.belongsTo('App/Model/User')
}

module.exports = Topic
