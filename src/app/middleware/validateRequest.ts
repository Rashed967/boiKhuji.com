import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"

// validate request middleware
 const validateRequest = (schema: AnyZodObject) => {
    return async(req:Request, res:Response, next:NextFunction) => {
        try{
            await schema.safeParseAsync({
                body: req.body
            })
            next()

        }catch(error){
            next(error)
        }
    }
}

export default validateRequest