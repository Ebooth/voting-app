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

    async getCharacter(id: number) {
        return this.charactersRepository.findOne(id)
    }

    async upvoteCharacter(upvoteCharacterDto: UpvoteChraracterDto) {
        return this.charactersRepository.increment(
            { id: upvoteCharacterDto.id },
            "votes",
            1
        );
    }
}
