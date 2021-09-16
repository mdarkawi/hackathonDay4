import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from "./users.controller";
import { UserService } from './user.service';
import {User} from "../entities/user";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        ],
    controllers: [UserController],
    providers: [UserService],
    exports: [],
})
export class UserModule {}