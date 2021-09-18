import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateUserDto, UserDto} from "./user.dto";
import {from, Observable, of,map,  tap, throwError} from "rxjs";
import {User} from "../entities/user";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}


    public read(_: UserDto): Observable<User> {
        return from(this.userRepository.find({email: _.email }))
            .pipe(
                map((user: User[]) => {

                    if(user[0] && bcrypt.compareSync(_.password, user[0].password)) {
                        return user[0];
                    } else {
                        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
                    }
                })
        )
    }
    create(_: CreateUserDto): Observable<any> {
        const user = new User();
        user.firstName = _.username;
        user.email = _.email;
        const hash:string = bcrypt.hashSync(_.password, 10);
        user.password = hash;

        return from(this.userRepository.save(user));
    }
    public update() {}
    public delete() {}

}
