var jsonServer = require('json-server')

var server = jsonServer.create()

server.use(jsonServer.defaults())

// Add a delay to /posts requests only
server.use('/posts', function(req, res, next) {
  setTimeout(next, 5000)
})

var router = jsonServer.router('src/models/db.json')
server.use(router)

server.listen(3001, () => {
  console.log('JSON Server running with delay on /posts');
});