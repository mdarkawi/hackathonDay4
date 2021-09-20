import {Entity, Column, PrimaryGeneratedColumn, Unique} from 'typeorm';
import {IsEmail} from "class-validator";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @IsEmail()
    @Column({
        unique: true
    })
    email: string;

    @Column({ default: true })
    password: string;
}