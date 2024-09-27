import { IAuthor } from "./author.interface";
import { Author } from "./author.model";

// create author in db
const createAuthorInDb = async (payload: IAuthor) => {
    const result = await Author.create(payload)
    return result
}

// get all author 
const getAllAuthorFromDb = async () => {
    const result = await Author.find({}),
    return result
}

// get author by id 
const getAuthorbyIdFromDb = async (id) => {
    const result = await Author.findOne({id})
    return result
}

// update author by id
const updateAurtorByIdInDb = async (id, payload: Partial<IAuthor>) => {
    const result = await Author.findOneAndUpdate({id}, {...payload}, {new: true})
    return result
}

// export services 
export const authorServices = {
    createAuthorInDb,
    getAllAuthorFromDb,
    getAuthorbyIdFromDb,
    updateAurtorByIdInDb
}