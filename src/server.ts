import mongoose from 'mongoose'
import app from './app'
import config from './app/config'
import { Server } from 'http'
// import crypto from 'crypto'

// let secretKey = crypto.randomBytes(32).toString('hex')
// console.log(secretKey);

let server: Server

async function main() {
    await mongoose.connect(config.database_url as string)
    server = app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
    })
}

main()
