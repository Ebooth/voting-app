import { Body, Controller, Get, Post } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { UpvoteChraracterDto } from './dto/upvote-character.dto';
import { Character } from "./entities/character.entity"

@Controller('characters')
export class CharactersController {
    constructor(private charactersService: CharactersService) { }

    @Get()
    async getCharacters(): Promise<Character[]> {
        return this.charactersService.getCharacters()
    }

    @Post()
    async upvoteCharacters(@Body() upvoteCharacterDto: UpvoteChraracterDto) {
        await this.charactersService.upvoteCharacter(upvoteCharacterDto)
        const upvotedCharacter = await this.charactersService.getCharacter(upvoteCharacterDto.id)
        return upvotedCharacter;
    }
}


