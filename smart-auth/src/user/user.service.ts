import { Injectable } from '@nestjs/common';
import {UserDto} from "./user.dto";
import {from, Observable} from "rxjs";
import {User} from "../entities/user";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    create(_: UserDto): Observable<any> {
        const user = new User();
        user.firstName = _.username;
        user.email = _.email;
        const hash:string = bcrypt.hashSync(_.password, 10);
        user.password = hash;

        return from(this.userRepository.save(user));
    }
}
