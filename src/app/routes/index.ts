import express from 'express'
import { bookRoutes } from '../modules/book/book.routes'
import { authorRoutes } from '../modules/author/author.routes'

const router = express.Router()

const routerModules = [
    {
        path: "/books",
        route: bookRoutes
    },
    {
        path: "/authors",
        route: authorRoutes
    }
]

routerModules.forEach((route) => router.use(route.path, route.route))

export const allRouters = router