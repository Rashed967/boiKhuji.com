import { model, Schema } from 'mongoose'
import { IPublisher, IPublisherBio } from './publisher.interface'

// author bio schema
const publisherBioSchema = new Schema<IPublisherBio>({
    shortBio: {
        type: String,
        required: true,
    },
    longBio: {
        type: String,
        default: ""
    },
})

// pulisher schema
const publisherSchema = new Schema<IPublisher>({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        default: ""
    },
    bio: {
        type: publisherBioSchema,
        required: true,
    },
    books: {
        type: Array<Schema.Types.ObjectId>,
    },
    authors: {
        type: Array<Schema.Types.ObjectId>,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
})

// publisher model
export const Publisher = model<IPublisher>('Publisher', publisherSchema)
