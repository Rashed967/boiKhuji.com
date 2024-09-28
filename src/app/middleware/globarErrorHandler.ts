import { ErrorRequestHandler } from 'express'
import httpStatus from 'http-status'

const globarErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: err.message || 'Something went wrong!',
        error: err,
    })
}

export default globarErrorHandler
