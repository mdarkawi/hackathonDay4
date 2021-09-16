import {IsEmail, IsNotEmpty, IsString, MinLength} from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    password: string;

}