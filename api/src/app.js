import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes'

dotenv.config()

class App {
  constructor () {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use('/imagens', express.static('./imagens'))
  }

  database () {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    const host = process.env.DB_HOST
    mongoose.connect(`mongodb+srv://${user}:${password}@${host}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  }

  routes () {
    this.express.use(routes)
  }
}

export default new App().express
