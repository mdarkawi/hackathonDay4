import {Module} from "@nestjs/common";
import { JwtModule} from "@nestjs/jwt";
import { AuthService } from './auth.service';

@Module({
    imports: [
        JwtModule.register({
            secret: 'hard!to-guess_secret', //TODO set in env varia
            signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {}