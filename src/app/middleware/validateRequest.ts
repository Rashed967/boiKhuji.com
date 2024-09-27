import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"

// validate request middleware
 const validateRequest = (schema: AnyZodObject) => {
    return async(req:Request, res:Response, next:NextFunction) => {
        try{
            const {success, error} = await schema.safeParseAsync({
                body: req.body
            })
            if(!success){
                throw new Error("author validation faild")
            }
            next()

        }catch(error){
            next(error)
        }
    }
}

export default validateRequest