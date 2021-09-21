import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Unique,
    ManyToOne,
    JoinTable,
    CreateDateColumn,
    UpdateDateColumn, BeforeInsert, BeforeUpdate
} from 'typeorm';
import { IsNotEmpty} from "class-validator";
import {User} from "./user";

@Entity('comment')
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column( )
    comment: string;

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


    @ManyToOne(type => User, user => user.comments, { primary: true})
    @JoinTable()
    user: User


}