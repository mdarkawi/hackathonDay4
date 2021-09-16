import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {IsEmail} from "class-validator";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @IsEmail()
    @Column()
    email: string;

    @Column({ default: true })
    password: string;
}