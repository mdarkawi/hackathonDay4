import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {CreateUserDto, UserDto} from "./user.dto";
import {UserService} from "./user.service";
import {ApiResponse} from "@nestjs/swagger";
import {map} from "rxjs";
import { JwtService} from '@nestjs/jwt';
import {AuthService} from "../auth/auth.service";

@Controller('user/')
export class UserController {
    constructor(
        private userService: UserService,
        private readonly authService: AuthService
    ) {}

    @ApiResponse({ status: 404, description: 'Not found' })
    @UsePipes(new ValidationPipe())
    @Post('login')
    login(@Body() user: UserDto) {
        return this.userService.read(user)
            .pipe(
                map((user) => {
                    return {
                        access_token: this.authService.generateToken(user.email, user.password)
                    }
                })
        )
    }

    @UsePipes(new ValidationPipe())
    @Post('register')
    register(@Body() user: CreateUserDto) {
        this.userService.create(user);
    }

}
