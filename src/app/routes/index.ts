import express from 'express'
import { bookRoutes } from '../modules/book/book.routes'
import { authorRoutes } from '../modules/author/author.routes'
import { publisherRoutes } from '../modules/pulisher/publisher.routes'

const router = express.Router()

const routerModules = [
    {
        path: "/books",
        route: bookRoutes
    },
    {
        path: "/authors",
        route: authorRoutes
    },
    {
        path: "/publishers",
        route: publisherRoutes
    },
    
]

routerModules.forEach((route) => router.use(route.path, route.route))

export const allRouters = router