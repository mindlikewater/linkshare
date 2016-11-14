'use strict'

const Comment = use('App/Model/Comment')

class CommentController {
  * create (request, response) {
      let data = request.only('topic_id', 'user_comment')
      let newComment = yield Comment.create(data)

      response.status(201).json(newComment)
  }

  * index (request, response) {
    let topicId = request.param('topic_id')
    let comments = yield Comment.query().select('user_comment').where('topic_id', topicId).orderBy('updated_at', 'desc')

    response.json(comments)
  }

  * delete (request, response) {
    let topicId = request.param('topic_id')
    let comments = yield Topic.query().where('topic_id', topicId)
    let delComment = yield Topic.query().where(topicId, 'comments')

    if (!delComment) {
      response.status(404).json({ error: "Comment not found" })
    }
    else {
      delComment = yield Topic.query().where(topicId, 'comments').del()
      response.status(204).json({ success: "Comment successfully deleted" })
    }
  }
}

module.exports = CommentController
