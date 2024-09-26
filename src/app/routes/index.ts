import express from 'express'

const router = express.Router()

const routerModules = [
    
]

routerModules.forEach((route) => router.use(route.path, route.route))

export const allRouters = router