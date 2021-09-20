import { Injectable } from '@nestjs/common';
import {User} from "../entities/user";
import {from, map, Observable} from "rxjs";
import * as bcrypt from "bcrypt";
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    public validateUser(email: string, password: string): Observable<User>{
        return from(this.userService.getUserByEmail(email)
            .pipe(
                map((user: User) => {
                    if(user && bcrypt.compareSync(password, user.password)) {
                        return user;
                    }
                    return null
                })
            ));
    }
    public generateToken(user: User): { access_token: string} {
        return {
            access_token: this.jwtService.sign({email: user.email, username: user.firstName})
        };
    }

}
