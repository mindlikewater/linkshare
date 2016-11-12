'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/users', 'UserController.register')
Route.post('/login', 'UserController.login')
//Route.get('/auth_test', 'UserController.auth_test').middleware('auth')

Route.post('/topics', 'TopicController.create').middleware('auth')
Route.get('/topics', 'TopicController.index')
Route.delete('/topics/:topic_id', 'TopicController.delete').middleware('auth')

Route.post('/comments', 'CommentController.create').middleware('auth')
Route.get('/topics/:topic_id/comments', 'CommentController.index')
Route.delete('/topics/:topic_id/comments/:comment_id', 'CommentController.delete').middleware('auth')
