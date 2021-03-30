import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersModule } from './characters/characters.module';
import { configService } from '../config/config.service';

@Module({
  imports: [CharactersModule, TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [],
  providers: [],
})
export class AppModule { }
