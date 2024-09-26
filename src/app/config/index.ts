import dontenv from 'dotenv'
import path from 'path'

dontenv.config({ path: path.join(process.cwd(), '.env') })

export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    salt_rounds: process.env.SALT_ROUNDS,
    secret_key: process.env.SECRET_KEY
}
