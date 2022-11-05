const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const nunjucks = require('nunjucks')
const projects = require("./db/data")

const server = express()

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'njk')
  //new-version
  .get('/', (req, res) => res.render("new-version/index", { items: projects }))
  //old-version
  .get('/old-version/', (req, res) => res.render("old-version/index"))
  .get('/old-version/projects', (req, res) => res.render("old-version/projects", { items: projects } ))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))