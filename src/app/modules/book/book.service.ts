import { IBook } from './book.interface'
import { Book } from './book.model'

// create book in db
const createBookInDb = async (payload: IBook) => {
    console.log("from service");
    const result = await Book.create(payload)
    return result
}

// get all book
const getAllBookFromDb = async () => {
    const result = await Book.find({}).populate('author').populate('publication')
    return result
}

// get book by _id
const getBookByidFromDb = async (id: string) => {
    const result = await Book.findById(id)
    return result
}

// update book by _id
const updateBookByIdInDb = async (id: string, payload: Partial<IBook>) => {
    // TODO: update logic on not premetive data

    const result = await Book.findOneAndUpdate(
        { id },
        { ...payload },
        { new: true }
    )
    return result
}

// update book by _id
const deleteBookByIdInDb = async (id: string) => {
    const result = await Book.findOneAndUpdate(
        { _id: id },
        { isDeleted: true },
        { new: true }
    )
    return result
}

// export services
export const bookServices = {
    createBookInDb,
    getAllBookFromDb,
    getBookByidFromDb,
    updateBookByIdInDb,
    deleteBookByIdInDb,
}
