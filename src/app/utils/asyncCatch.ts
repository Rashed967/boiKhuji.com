import { Request, Response } from "express"
import { NextFunction } from "express-serve-static-core"


// catchAsync function
const catchAsync = (fn) => {
    return (req:Request, res:Response, next:NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(error => next(error))
    }
}

export default catchAsync