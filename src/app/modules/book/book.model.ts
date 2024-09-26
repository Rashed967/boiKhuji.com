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
        required: true
    },
    longSummary: {
        type: String,
        required: true
    }
})

// book schema
const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: [Schema.Types.ObjectId],
        required: true,
        validate: {
            validator: function(ids:string[]){
                return ids.every(id => isValidObjectId(id))
            },
            message: "all _id must be valid mongoose _id"
        }
    },
    translator: {
        type: [Schema.Types.ObjectId],
        validate: {
            validator : function(ids:string[]){
                return ids.every(id => isValidObjectId(id))
            }
        }
    },
    coverDesigner: {
        type: Schema.Types.ObjectId,
        validate: {
            validator: function(id){
                return isValidObjectId(id)
            }
        }
    },
    categories: {
        type: [String],
        required: true,
    },
    reviewsAndRatings: {
        type: [Schema.Types.ObjectId],
        validate: {
            validator: function(ids: string[]){
                return ids.every(id => isValidObjectId(id))
            }
        }
    },
    price: {
        type: Number,
        required: true,
    },
    bookLength: {
        type: Number,
        required: true,
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
        required: true,
        validate: {
            validator : function(id){
                return isValidObjectId(id)            }
        }
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
        required: true
    },
    summary: {
        type: summarySchema,
        required: true
    }
})


// book model 
export const Book = model<IBook>('Book', bookSchema)