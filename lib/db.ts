import {Pool} from "pg"

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'NextJSBackened',
    password: 'Choru@1234567890',
    port: 5432,
 
})


