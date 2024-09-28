import httpStatus from 'http-status'
import catchAsync from '../../utils/asyncCatch'
import sendResponse from '../../utils/sendResponse'
import { authorServices } from './author.service'

// create author
const createAuthor = catchAsync(async (req, res) => {
    const { author } = req.body
    const result = await authorServices.createAuthorInDb(author)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'author created successfully',
        data: result,
    })
})

//get all author
const getAllAuthor = catchAsync(async (req, res) => {
    const result = await authorServices.getAllAuthorFromDb()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All author fatched successfully',
        data: result,
    })
})

// get author by id
const getAuthorById = catchAsync(async (req, res) => {
    const { authorId } = req.params
    const result = await authorServices.getAuthorbyIdFromDb(authorId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'author fatched successfully',
        data: result,
    })
})

// get author by id
const updateAuthorById = catchAsync(async (req, res) => {
    const { authorId } = req.params
    const { author } = req.body
    const result = await authorServices.updateAurtorByIdInDb(authorId, author)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'author updated successfully',
        data: result,
    })
})

// delete author by id
const deleteAuthorById = catchAsync(async (req, res) => {
    const { authorId } = req.params
    const result = await authorServices.deleteAuthorByIdInDb(authorId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'author deleted successfully',
        data: result,
    })
})

// export author controllers
export const authorControllres = {
    createAuthor,
    getAllAuthor,
    getAuthorById,
    updateAuthorById,
    deleteAuthorById
}
