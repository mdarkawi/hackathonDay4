import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from "./users.controller";
import { UserService } from './user.service';
import {User} from "../entities/user";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({ secret: 'hard!to-guess_secret' })
        ],
    controllers: [UserController],
    providers: [UserService],
    exports: [],
})
export class UserModule {}