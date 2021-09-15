import { Controller, Get, Post } from '@nestjs/common';
import { Observable, of} from "rxjs";

@Controller('user/')
export class UsersController {
    constructor() {}

    @Get('login')
    login(): string {
        return 'user controller';
    }
    @Post('register')
    register(): Observable<any> {
        return of('user controller');
    }

}
