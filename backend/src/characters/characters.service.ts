import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { UpvoteChraracterDto } from './dto/upvote-character.dto';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {
    constructor(@InjectRepository(Character) private charactersRepository: Repository<Character>) { }

    async getCharacters(): Promise<Character[]> {
        return this.charactersRepository.find()
    }

    async upvoteCharacter(upvoteCharacterDto: UpvoteChraracterDto) {
        await this.charactersRepository.increment(
            { id: upvoteCharacterDto.id },
            "numberOfVotes",
            1
        );
    }
}
