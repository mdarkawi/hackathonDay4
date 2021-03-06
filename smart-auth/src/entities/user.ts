import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Unique,
    OneToMany,
    JoinTable,
    CreateDateColumn,
    BeforeInsert, BeforeUpdate, UpdateDateColumn
} from 'typeorm';
import { IsEmail, IsNotEmpty} from "class-validator";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    firstName: string;

    @IsEmail()
    @IsNotEmpty()
    @Column({
        unique: true
    })
    email: string;

    @IsNotEmpty()
    @Column()
    role: string;

    @IsNotEmpty()
    @Column()
    password: string;

    @CreateDateColumn()
    @Column()
    createdAt: Date;

    @UpdateDateColumn()
    @Column()
    updatedAt: Date;

    @BeforeInsert()
    public updateDateCreatedAt() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    @BeforeUpdate()
    public updateDateUpdatedAt() {
        this.updatedAt = new Date();
    }

}