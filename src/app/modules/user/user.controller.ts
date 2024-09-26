import { Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import { userServices } from './user.service'
import catchAsync from '../../utils/asyncCatch'
import sendResponse from '../../utils/sendResponse'
import { jwtToken } from '../../utils/jwtTokenGenerateAndVerify'

// create user
const createUser = catchAsync(async (req: Request, res:Response) => {
    const user = req.body
    const result = await userServices.createUserIntoDB(user)
    const token = jwtToken.jwtTokenGenerate(user)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true, 
        message: "User created successfully",
        data: {
            token : token,
            data: result
        }
    })
})

// export user controllers
export const userControllers = {
    createUser,
}
