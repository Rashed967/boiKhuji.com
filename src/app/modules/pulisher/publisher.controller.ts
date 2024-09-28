import httpStatus from "http-status";
import catchAsync from "../../utils/asyncCatch";
import sendResponse from "../../utils/sendResponse";
import { publisherServices } from "./publisher.service";

// create publisher 
const createPublisher = catchAsync(async (req, res) => {
    const {publisher} = req.body
    const result= await publisherServices.createPublisher(publisher)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true, 
        message: 'publisher created successfully',
        data:  result
    })
}) 


// get all publisher 
const getAllPublisher = catchAsync(async (req, res) => {
    const result= await publisherServices.getAllPublisherFromDb()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true, 
        message: 'all publisher retrieved successfully',
        data:  result
    })
}) 

// get  publisher by id
const getPublisherById = catchAsync(async (req, res) => {
    const {publisherId} = req.params
    const result= await publisherServices.getPublisherByIdFromDb(publisherId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true, 
        message: 'publisher retrieved successfully',
        data:  result
    })
}) 

//  update publisher by id
const updatePublisherById = catchAsync(async (req, res) => {
    const {publisherId} = req.params
    const {publisher} = req.body
    const result= await publisherServices.updatePublisherByIdInDb(publisherId, publisher)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true, 
        message: 'publisher updated successfully',
        data:  result
    })
}) 

// delete publisher by id
const deletePublisherById = catchAsync(async (req, res) => {
    const {publisherId} = req.params
    const result= await publisherServices.deletePublisherByIdInDb(publisherId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true, 
        message: 'publisher deleted successfully',
        data:  result
    })
}) 


// export publisher controller
export const publisherControllers = {
    createPublisher,
    getAllPublisher,
    getPublisherById,
    updatePublisherById,
    deletePublisherById
}