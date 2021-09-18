import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService
    ) {}

    validateUser(password, encryptedPassword): boolean {
        return bcrypt.compareSync(password, encryptedPassword);
    }
    generateToken(email: string, password: string): string {
        return this.jwtService.sign({email: email, password: password});
    }
}
