'use strict'

const Lucid = use('Lucid')

class Comment extends Lucid {
  return this.belongsTo('App/Model/Topic')
}

module.exports = Comment
