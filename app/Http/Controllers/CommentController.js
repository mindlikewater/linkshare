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
    let user = request.auth.getUser()
    let commentId = request.param('comment_id')
    let delComment = yield Topic.query().where('id', commentId)

    if (user.id === comment.user_id) {
      comment = yield Topic.query().where('id', commentId).del()
      response.status(204).json({ success: "Comment successfully deleted" })
    }
    else {
      response.status(404).json({ error: "Comment not found" })
    }
  }
}

module.exports = CommentController
