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
import {Comment} from "./comment";
import {Article} from "./article";
import {Reaction} from "./reaction";

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

    @OneToMany(type => Comment, comment => comment.user, {cascade: true})
    @JoinTable()
    comments: Comment[]

    @OneToMany(type => Article, article => article.user, {cascade: true})
    articles: Article[]

    @OneToMany( type => Reaction, reaction => reaction.user)
    reactions: Reaction[]

}