import { IsEmail, IsNotEmpty, IsString, MinLength} from 'class-validator';

export class CredentialsDto {
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    password: string;
}


export class CreateUserDto extends CredentialsDto {
    @IsNotEmpty()
    @IsString()
    username: string;

}