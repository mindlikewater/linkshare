'use strict'

const Topic = use('App/Model/Topic')

class TopicController {
  * create (request, response) {
      let user = request.authUser
      let data = request.only('title', 'url')
      data.user_id = user.id
      // let topic = yield Topic.create(data)
      let topic = new Topic(data)
      yield user.topics().save(topic)

      response.status(201).json(topic)
  }

  * index (request, response) {
    let topics = yield Topic.query().select("*").orderBy('updated_at', 'desc')

    response.json(topics)
  }

  * delete (request, response) {
    let user = request.auth.getUser()
    let topicId = request.param('topic_id')
    let topic = yield Topic.query().where('id', topicId)

    if (user.id === topic.user_id) {
      topic = yield Topic.query().where('id', topicId).del()
      response.status(204).json({ success: "Topic successfully deleted" })
    }
    else {
      response.status(404).json({ error: "Topic not found" })
    }
  }
}

module.exports = TopicController
