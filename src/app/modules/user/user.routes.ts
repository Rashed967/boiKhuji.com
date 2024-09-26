import express from 'express'
import { userControllers } from './user.controller'

const routes = express.Router()

// create user 
routes.post("/", userControllers.createUser)

export const userRoutes = routes

