'use strict'

const Link = use('App/Model/Topic')

class TopicController {
  * create (request, response) {
      let data = request.only('title', 'url')

      try {
        //user must be logged in to post topic links
        let user = request.authUser

        let topic = yield Topic.create(data)
        topic.save()

        response.status(201).json(topic)
      }
      catch (e) {
        response.status(403).json({ error: "Unauthorized user"})
      }
    }

    * index (request, response) {
      let topicId = request.param('topic_id')
      let topics = yield Topic.findBy('topic_id', topicId)

      response.json(topics)
    }

    * delete (request, response) {
      //user must be logged in to delete topic links
      let user = request.authUser
      let topicId = request.param('topic_id')
      let topic = yield Topic.findBy('topic_id', topicId)

      if (!user) {
        response.status(403).json({ error: "Unauthorized user" })
      }
      else if (!topic) {
        response.status(404).json({ error: "Topic not found" })
      }
      else {
        yield topic.del()

        response.status(204).json({ success: "Topic successfully deleted" })
      }
    }
}

module.exports = TopicController
