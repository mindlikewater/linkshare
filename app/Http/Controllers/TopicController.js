'use strict'

const Topic = use('App/Model/Topic')

class TopicController {
  * create (request, response) {
      let data = request.only('title', 'url')
      let topic = yield Topic.create(data)

      response.status(201).json(topic)
  }

  * index (request, response) {
    let topics = yield Topic.query().select('title', 'url').orderBy('updated_at', 'desc')

    response.json(topics)
  }

  * delete (request, response) {
    let userId = request.param('user_id')
    let topics = yield Topic.findBy('user_id', userId)
    let eraseTopic = yield Topic.query().where(userId, 'topics')

    if (!eraseTopic) {
      response.status(404).json({ error: "Topic not found" })
    }
    else {
      eraseTopic = yield Topic.query().where(userId, 'topics').del()
      response.status(204).json({ success: "Topic successfully deleted" })
    }
  }
}

module.exports = TopicController
