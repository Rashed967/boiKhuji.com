import express from 'express'
import { authorControllres } from './author.controller'
import validateRequest from '../../middleware/validateRequest'
import { authorValidationSchema } from './author.validation'

const routes = express.Router()

// get all author 
routes.get("/", authorControllres.getAllAuthor)

// get author by id 
routes.get("/:authorId", authorControllres.getAuthorById)

// create author 
routes.post("/" , validateRequest(authorValidationSchema.createAuthorValidationSchema), authorControllres.createAuthor)

// update author by id
routes.patch("/:authorId", validateRequest(authorValidationSchema.updateAuthorValidationSchema), authorControllres.updateAuthorById)

// delete author by id
routes.delete("/:authorId", authorControllres.deleteAuthorById)

// export author routes
export const authorRoutes = routes