import data from "./star_wars_characters.json"

interface Character {
    id: number;
    name: string;
    pic: string;
    homeworld?: string;
}

export const characters: Character[] = data.characters