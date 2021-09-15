import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloId(): any {
    return {
      username: 'darkawi1',
    };
  }
}
