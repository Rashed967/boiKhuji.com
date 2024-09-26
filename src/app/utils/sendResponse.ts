import httpStatus from "http-status";

// sendResponse function type 
type TResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string;
    data: T
} 

// send response function 
const sendResponse =  <T>(res, data: TResponse<T>) => {
    res.status(data.statusCode)
    .json({
        success: data?.success,
        message: data?.message,
        data: data.data
    })
}

export default sendResponse