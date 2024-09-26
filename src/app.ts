import { Request, Response } from 'express'
import express from 'express'
import cors from 'cors'
import { allRouters } from './app/routes'
import globarErrorHandler from './app/middleware/globarErrorHandler'

const app = express()

//
app.use(express.text())
app.use(express.json())
app.use(cors())

// routes
app.use('/api/v1', allRouters)

app.get('/', (req: Request, res: Response) => {
    res.json({
        success: true,
        message: 'Welcome to boiKhuji.com',
    })
})

// globar error handler 
app.use(globarErrorHandler)


export default app
