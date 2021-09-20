import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import {User} from "./user";
import {Reaction} from "./reaction";
import {Tag} from "./tag";


@Entity('article')
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    reference: string;

    @Column()
    content: string;

    @Column()
    draft: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @BeforeInsert()
    public updatedCreatedAt() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    @BeforeUpdate()
    public updateUpdatedAt() {
        this.updatedAt = new Date();
    }

    @ManyToOne( type => User, user => user.articles, {primary: true} )
    user: User

    @OneToMany( type => Reaction, reaction => reaction.article)
    reactions: Reaction[]

    @ManyToMany(type => Tag, tag => tag.articles)
    tags: Tag[]
}