# Summary

This project is about creating a Link-sharing API using Node.js and Adonis.  The project can be found at: [Tai's Linkshares](https://aqueous-hollows-15015.herokuapp.com/).

# Tools

- Node.js
- Adonis
- Postman (for testing)
- Heroku (for housing the databases)

## How to Use the link-share API

POST /users
Allows person to register.  Takes the following data/parameters:
  * Username - String   | Example: anyname
  * Email - String      | Example: anyname@example.com
  * Password - String   | Example: myPassw0rd

POST /login
Log in with your username and password (Note: Users must be logged in to submit links and comments.)  A Successful login will generate an authorization token that is used in the request header when submitting new links or comments.
  * Username - String
  * Password - String

POST /topics
Allows authorized user to create new topics with a title and link. Must include "Authorization" as key and "Bearer <token>" (where <token> represents your actual authorization token generated during login) as value in the request header.
  * Title - String  | Example: Cute Baby Animals
  * Url - String    | Example: http://www.boredpanda.com/cute-baby-animals/

GET /topics
Allows anyone to view a list of current topics (title and url) from most recent to least recent. No params required.

DELETE /topics/:topic_id
Allows authorized user to delete topics of their own creation. Must include authorization token in the request header.   

POST /comments
Allows authorized user to create new comments. Must include authorization token in the request header.   
  * topic_id - Integer      | Example: 2
  * user_comment - String   | Example: Aww, cute animals!

GET /topics/:topic_id/comments
Allows anyone to view the comments associated with a given topic.

DELETE /comments/:comment_id
Allows authorized user to delete comments of their own creation. Must include authorization token in the request header.   
