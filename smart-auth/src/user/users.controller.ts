import {Body, Controller, Get, Post} from '@nestjs/common';
import { Observable, of} from "rxjs";
import {UserDto} from "./user.dto";
import {UserService} from "./user.service";

@Controller('user/')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Get('login')
    login(): string {
        return 'user controller';
    }
    @Post('register')
    register(@Body() user: UserDto): Observable<any> {
        return this.userService.create(user);
    }

}
