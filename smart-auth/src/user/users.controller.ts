import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
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

    @UsePipes(new ValidationPipe())
    @Post('register')
    register(@Body() user: UserDto) {
        this.userService.create(user);
    }

}
