'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.timestamps()
      table.string('user_comment')
      table.integer('user_id')
      table.foreign('user_id').references('users.id')
      table.intger('topics_id')
      table.foreign('topics_id').references('topics.id')
    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
