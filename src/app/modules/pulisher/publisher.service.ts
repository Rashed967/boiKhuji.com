
import { IPublisher } from './publisher.interface'
import { Publisher } from './publisher.model'

// create publisher in db
const createPublisher = async (payload: IPublisher) => {
    const result = await Publisher.create(payload)
    return result
}

// get all publisher from db
const getAllPublisherFromDb = async () => {
    const result = await Publisher.find({})
    return result
}

// get publisher by id from db
const getPublisherByIdFromDb = async (id: string) => {
    const result = await Publisher.findOne({ _id: id })
    return result
}

// update publisher by id in db
const updatePublisherByIdInDb = async (
    id: string,
    payload: Partial<IPublisher>
) => {
    const { bio, books, authors, ...remainingData } = payload

    const modifiedPublisherData: Record<string, unknown> = {
        ...remainingData,
    }

    // bio chekc
    if (bio && Object.keys(bio).length) {
        for (const [key, value] of Object.entries(bio)) {
            modifiedPublisherData[`bio.${key}`] = value
        }
    }

    // books chekc
    if (books && Object.keys(books).length) {
        for (const [key, value] of Object.entries(books)) {
            modifiedPublisherData[`bio.${key}`] = value
        }
    }

    // authors check
    if (authors && Object.keys(authors).length) {
        for (const [key, value] of Object.entries(authors)) {
            modifiedPublisherData[`bio.${key}`] = value
        }
    }

    const result = await Publisher.findOneAndUpdate({ _id: id }, payload, {
        new: true,
        runValidators: true,
    })
    return result
}

// delete publisher by id in db
const deletePublisherByIdInDb = async (id: string) => {
    const result = await Publisher.findOneAndUpdate(
        { _id: id },
        { isDeleted: true },
        { new: true }
    )
    return result
}

// export publisher services
export const publisherServices = {
    createPublisher,
    getAllPublisherFromDb,
    getPublisherByIdFromDb,
    updatePublisherByIdInDb,
    deletePublisherByIdInDb,
}
