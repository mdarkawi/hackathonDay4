import {Module} from "@nestjs/common";
import { JwtModule} from "@nestjs/jwt";
import { PassportModule} from "@nestjs/passport";
import { AuthService } from './auth.service';
import * as dotenv from "dotenv";
import {UserModule} from "../user/user.module";
import {LocalStrategy} from "./local.strategy";

dotenv.config();
@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: 'jwt',
            session: true
        }),
        JwtModule.register({
            secret: process.env.SECRET,
            signOptions: { expiresIn: '60s' },
        }),
        UserModule
    ],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService],
})
export class AuthModule {}