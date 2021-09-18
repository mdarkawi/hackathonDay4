import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from "./users.controller";
import { UserService } from './user.service';
import {User} from "../entities/user";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        AuthModule
        ],
    controllers: [UserController],
    providers: [UserService],
    exports: [],
})
export class UserModule {}