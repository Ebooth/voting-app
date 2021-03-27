import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "characters" })
export class Character {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    homeworld: string;

    @Column()
    pic: string;

    @Column()
    votes: number;
}