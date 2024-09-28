import { model, Schema } from 'mongoose'
import { IAuthor } from './author.interface'

// bio schema
const bioSchema = new Schema({
    shortBio: {
        type: String,
        required: true,
    },
    longBio: {
        type: String,
    },
})

// author schema
const authorSchema = new Schema<IAuthor>(
    {
        name: {
            type: String,
            required: true,
        },
        bio: {
            type: bioSchema,
            required: true,
        },
        books: {
            type: Array(Schema.Types.ObjectId),
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true,
    }
)

// pre hooks
// pre hook for cheking is author exists or not
authorSchema.pre('findOneAndUpdate', async function (next) {
    const query = this.getQuery()
    const isAuthorExists = await Author.findOne(query)
    if(!isAuthorExists){
        throw new Error("did not matched any author with this id")
    }
    next()
})




// auhor model
export const Author = model<IAuthor>('Author', authorSchema)
