import {Body, Controller, Get, Post, UseGuards, Request, UsePipes, ValidationPipe} from '@nestjs/common';
import {CreateUserDto, CredentialsDto} from "./user.dto";
import {AuthService} from "../auth/auth.service";

@Controller('user/')
export class UserController {
    constructor() {}



    @UsePipes(new ValidationPipe())
    @Post('register')
    register(@Body() user: CreateUserDto) {
        //this.userService.create(user);
    }

}
