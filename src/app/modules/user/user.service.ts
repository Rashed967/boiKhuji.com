import { IUser } from './user.interface'
import { User } from './user.mode'

// create user in db
const createUserIntoDB = async (payload: IUser) => {
    const result = await User.create(payload)
    return result
}

// export user services
export const userServices = {
    createUserIntoDB,
}
