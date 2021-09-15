import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3001;
  app.enableCors();
  app.enableCors();

  await app.listen(port);
  console.log(`http://localhost:${port}/`);
}
bootstrap();
