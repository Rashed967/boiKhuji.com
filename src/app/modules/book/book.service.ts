import { IBook } from './book.interface'
import { Book } from './book.model'

// create book in db
const createBookInDb = async (payload: IBook) => {
    const result = await Book.create(payload)
    return result
}

// get all book
const getAllBookFromDb = async () => {
    const result = await Book.find({})
    return result
}

// get book by _id
const getBookByidFromDb = async (id) => {
    const result = await Book.findById(id)
    return result
}

// update book by _id
const updateBookByIdInDb = async (id, payload) => {
    const result = await Book.findOneAndUpdate(
        { id },
        { ...payload },
        { new: true }
    )
    return result
}


// export services 
export const bookServices = {
    createBookInDb, 
    getAllBookFromDb,
    getBookByidFromDb,
    updateBookByIdInDb
}