import { Injectable } from '@nestjs/common';
import { starWarsCharacters } from './data/characters';
import type { Character } from "./interfaces/character.interface"

@Injectable()
export class CharactersService {
    private characters = starWarsCharacters

    getCharacters(): Character[] {
        return this.characters
    }
}
