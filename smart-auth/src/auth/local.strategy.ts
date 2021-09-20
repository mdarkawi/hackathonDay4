import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {AuthService} from "./auth.service";
import {map, Observable} from "rxjs";
import {User} from "../entities/user";
import {Strategy} from "passport-local";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: 'email' });
    }
    validate(email: string, password: string): Observable<User> {
        return this.authService.validateUser(email, password)
            .pipe(
                map((user: User)=> {
                    if (!user) {
                        throw new UnauthorizedException();
                    }
                    return user;
                })
            );
    }
}