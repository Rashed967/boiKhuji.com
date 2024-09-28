import { run } from "node:test";
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
const getAuthorbyIdFromDb = async (id:string) => {
    const result = await Author.findOne({_id: id})
    return result
}

// update author by id
const updateAurtorByIdInDb = async (id:string, payload: Partial<IAuthor>) => {
    const {bio, books, ...reminingData} = payload

    const modifiedAuthorData : Record<string, unknown> = {
        ...reminingData,
    }

    if(bio && Object.keys(bio).length){
        for(const [key, value] of Object.entries(bio)){
            modifiedAuthorData[`bio.${key}`] = value
        }
    }

    if(books && Object.keys(books).length){
        for(const [key, value] of Object.entries(books)){
            modifiedAuthorData[`books.${key}`] = value
        }
    }
    const result = await Author.findOneAndUpdate({_id : id}, payload, {new: true})
    return result
}


// delete author in db 
const deleteAuthorByIdInDb = async (id: string) => {
    const result = await Author.findOneAndUpdate(
        {_id: id},
        {isDeleted: true},
        {new: true})
    return result

}

// export services 
export const authorServices = {
    createAuthorInDb,
    getAllAuthorFromDb,
    getAuthorbyIdFromDb,
    updateAurtorByIdInDb,
    deleteAuthorByIdInDb
}