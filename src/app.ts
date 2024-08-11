import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import { UserRoutes } from './app/modules/users/user.route'
import globalErrorHandler from './middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', UserRoutes)

//Testing
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  throw new Error('Testing Error logger')
})

app.use(globalErrorHandler)
export default app
