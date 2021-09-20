import {BeforeInsert, BeforeUpdate, Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Article} from "./article";

@Entity('tag')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

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
    public updatedUpdatedAt() {
        this.updatedAt = new Date();
    }

    @ManyToMany(type => Article, article => article.tags)
    articles: Article[]
}