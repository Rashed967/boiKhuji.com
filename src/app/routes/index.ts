import express from 'express'
import { userRoutes } from '../modules/user/user.routes'

const router = express.Router()

const routerModules = [
    {
        path: "/users",
        route: userRoutes
    }
]

routerModules.forEach((route) => router.use(route.path, route.route))

export const allRouters = router