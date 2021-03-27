import { Controller, Get } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { Character } from './interfaces/character.interface';

@Controller('characters')
export class CharactersController {
    constructor(private charactersService: CharactersService) { }

    @Get()
    getCharacters(): Character[] {
        return this.charactersService.getCharacters()
    }
}


