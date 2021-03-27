require('dotenv').config();
import { Pool } from "pg"
import { starWarsCharacters } from "./data/characters"

async function importData() {

    const pool = new Pool({
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        port: parseInt(process.env.POSTGRES_PORT, 10),
    })

    const insertions = starWarsCharacters.map(({ id, name, pic, homeworld }) => {
        return pool.query(`INSERT INTO public.characters(id, name, pic, homeworld, votes) 
            VALUES (${id}, '${name}', '${pic}', '${homeworld}', 0)
        `)
    })
    return Promise.all(insertions).then(() => pool.end())
}

importData();

