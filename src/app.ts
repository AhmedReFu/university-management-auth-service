import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/users/users.route'
import cors from 'cors'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application
app.use('/api/v1/users/', usersRouter)
//Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
