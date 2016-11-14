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
    let topicId = request.param('topic_id')
    let topic = yield Topic.findBy('topic_id', topicId)

    if (!topic) {
      response.status(404).json({ error: "Topic not found" })
    }
    else {
      yield topic.del()
      response.status(204).json({ success: "Topic successfully deleted" })
    }
  }
}

module.exports = TopicController
