import express from 'express'
import { bookController } from './book.controller'

const routes = express.Router()

// get all book
routes.get('/', bookController.getAllbook)

// get book by _id
routes.get('/:bookId', bookController.getBookById)

// crete book
routes.post('/', bookController.createBook)

// update book by _id
routes.patch('/:bookId', bookController.updateBookById)

// export routes 
export const bookRoutes = routes

