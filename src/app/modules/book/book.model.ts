import { isValidObjectId, model, Schema, Types } from 'mongoose'
import { IBook } from './book.interface'

// edition and date schema
const editionAndDateSchema = new Schema({
    edition: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
})

// summary schema
const summarySchema = new Schema({
    shortSummary: {
        type: String,
        required: true,
    },
    longSummary: {
        type: String,
        required: true,
    },
})

// book schema
const bookSchema = new Schema<IBook>(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: [Schema.Types.ObjectId],
            ref: 'Author',
            required: true,
            validate: {
                validator: function (ids: string[]) {
                    return ids.every((id) => isValidObjectId(id))
                },
                message: 'all _id must be valid mongoose _id',
            },
        },
        imageUrl: {
            type: String,
        },
        translator: {
            type: [Schema.Types.ObjectId],
            validate: {
                validator: function (ids: string[]) {
                    return ids.every((id) => isValidObjectId(id))
                },
                message: 'all _id must be valid mongoose _id',
            },
        },
        coverDesigner: {
            type: Schema.Types.ObjectId,
            validate: {
                validator: function (id) {
                    return isValidObjectId(id)
                },
            },
        },
        categories: {
            type: [String],
            required: true,
        },
        reviewsAndRatings: {
            type: [Schema.Types.ObjectId],
            validate: {
                validator: function (ids: string[]) {
                    return ids.every((id) => isValidObjectId(id))
                },
                message: 'all _id must be valid mongoose _id',
            },
        },
        price: {
            type: Number,
            required: true,
        },
        bookLength: {
            type: Number,
        },
        firstPublished: {
            type: String,
            required: true,
        },
        editionAndDate: {
            type: editionAndDateSchema,
            required: true,
        },
        publication: {
            type: Schema.Types.ObjectId,
            ref: 'Publisher',
            required: true,
            validate: {
                validator: function (id) {
                    return isValidObjectId(id)
                },
            },
            message: '_id must be valid mongoose _id',
        },
        isbn: {
            type: String,
            required: true,
        },
        languages: {
            type: [String],
            required: true,
        },
        format: {
            type: String,
            enum: ['Hardcover', 'Paperback', 'Ebook'],
            required: true,
        },
        summary: {
            type: summarySchema,
            required: true,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

// pre hook for checking if book exsits or not
bookSchema.pre('findOneAndUpdate', async function (next) {
    const query = this.getQuery()
    const isBookExists = await Book.findOne(query)
    if (!isBookExists) {
        throw new Error('did matched any book with this id')
    }
    next()
})

// book model
export const Book = model<IBook>('Book', bookSchema)
