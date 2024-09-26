import { model, Schema } from 'mongoose'
import { IUser } from './user.interface'
import bcrypt from 'bcrypt'
import config from '../../config'

// userSchema
export const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    userName: {
        type: String,
        required: [true, 'userName is required'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
})


// pre hook for hashing password 
UserSchema.pre('save', async function (next) {
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(config.salt_rounds))
    next()
})

// user model
export const User = model<IUser>('User', UserSchema)
