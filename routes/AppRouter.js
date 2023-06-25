const express = require('express')
const Router = express.Router()

const ActorRouter = require('./actorRouter')
const MovieRouter = require('./movieRouter')
const ReviewRouter = require('./reviewRouter')

Router.use('/', ActorRouter)
Router.use('/', MovieRouter)
Router.use('/', ReviewRouter)

module.exports = Router 
