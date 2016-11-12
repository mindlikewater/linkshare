'use strict'

const Schema = use('Schema')

class TopicsTableSchema extends Schema {

  up () {
    this.create('topics', (table) => {
      table.increments()
      table.timestamps()
      table.string('title')
      table.string('url')
      table.integer('user_id')
      table.foreign('user_id').references('users.id')
    })
  }

  down () {
    this.drop('topics')
  }

}

module.exports = TopicsTableSchema
