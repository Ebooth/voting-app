import data from "./star_wars_characters.json"

interface Character {
    id: number;
    name: string;
    pic: string;
    homeworld?: string;
}
export const starWarsCharacters: Character[] = data.characters