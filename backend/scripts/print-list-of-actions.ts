import { starWarsCharacters } from "./data/characters"


const inserts = starWarsCharacters.map(({ id, name, pic, homeworld }) => {
    return `INSERT INTO public.characters(id, name, pic, homeworld, votes) 
        VALUES (${id}, '${name}', '${pic}', '${homeworld}', 0)`
})

console.log(inserts.join(";\n"))