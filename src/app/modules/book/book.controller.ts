import httpStatus from 'http-status'
import catchAsync from '../../utils/asyncCatch'
import sendResponse from '../../utils/sendResponse'
import { bookServices } from './book.service'

// create book
const createBook = catchAsync(async (req, res) => {
    const { book } = req.body
    const result = await bookServices.createBookInDb(book)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Book created successfully',
        data: result,
    })
})

// get all book
const getAllbook = catchAsync(async (req, res) => {
    const result = await bookServices.getAllBookFromDb()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All book fatched successfully',
        data: result,
    })
})

// get book by _id
const getBookById = catchAsync(async (req, res) => {
    const { bookId } = req.params
    const result = await bookServices.getBookByidFromDb(bookId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'book fatched successfully',
        data: result,
    })
})

// update book by _id
const updateBookById = catchAsync(async (req, res) => {
    const { bookId } = req.params
    const result = await bookServices.updateBookByIdInDb(bookId, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'book updated successfully',
        data: result,
    })
})

// delete book by _id
const deleteBookById = catchAsync(async (req, res) => {
    const { bookId } = req.params
    const result = await bookServices.deleteBookByIdInDb(bookId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'book deleted successfully',
        data: result,
    })
})

// export book controllers
export const bookController = {
    createBook,
    getAllbook,
    getBookById,
    updateBookById,
    deleteBookById,
}
