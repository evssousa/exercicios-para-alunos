const Comment = require('./Comment')

class Post {
  constructor(title, content, author) {
    this.title = title
    this.content = content
    this.author = author
    this.comment = []
  }

  addComments(author, content) {
    this.comment.push(new Comment(author, content))
  }
}

module.exports = Post