import config from "../config";
import jwt from 'jsonwebtoken'
import { IUser } from "../modules/user/user.interface";

const jwtTokenGenerate = (user:IUser) => {
    const token = jwt.sign({name: user.name, userName: user.userName, email: user.email}, config.secret_key as string, {
        expiresIn: '10h'
    })
    return token
}


export const jwtToken = {
    jwtTokenGenerate,
}