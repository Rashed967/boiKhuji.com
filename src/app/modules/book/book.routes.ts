import express from 'express'
import { bookController } from './book.controller'
import validateRequest from '../../middleware/validateRequest'
import { bookValidationSchema } from './book.validation'

const routes = express.Router()

// get all book
routes.get('/', bookController.getAllbook)

// get book by _id
routes.get('/:bookId', bookController.getBookById)

// create book
routes.post(
    '/',
    validateRequest(bookValidationSchema.createBookValidationSchema),
    bookController.createBook
)

// update book by _id
routes.patch(
    '/:bookId',
    validateRequest(bookValidationSchema.updateBookValidationSchema),
    bookController.updateBookById
)

// delete book by id
routes.delete('/:bookId', bookController.deleteBookById)

// export routes
export const bookRoutes = routes
