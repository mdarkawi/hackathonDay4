import {BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {Article} from "./article";


@Entity('reaction')
export class Reaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @BeforeInsert()
    public updateCreatedAt() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    @BeforeUpdate()
    public updateUpdatedAt() {
        this.updatedAt = new Date();
    }
    @ManyToOne(type => User, user => user.reactions)
    user: User

    @ManyToOne(type => Article, article => article.reactions)
    article: Article
}