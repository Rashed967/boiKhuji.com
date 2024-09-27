import { model, Schema } from 'mongoose'
import { IAuthor } from './author.interface'
import { z } from 'zod'

// bio schema
const bioSchema = new Schema({
    shortBio: {
        type: String,
        required: true,
    },
    longBio: {
        type: String,
    },
    books: {
        type: Array(Schema.Types.ObjectId)
    }
})

// author schema
const authorSchema = new Schema<IAuthor>({
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: bioSchema,
        required: true,
    },
})

// auhor model
export const Author = model<IAuthor>('Author', authorSchema)
