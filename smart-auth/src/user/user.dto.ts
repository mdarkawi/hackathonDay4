import { IsEmail, IsNotEmpty, IsString, MinLength} from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    password: string;
}


export class CreateUserDto extends UserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

}