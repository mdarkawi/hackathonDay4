import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user';
import { UserModule} from "./user/user.module";
import { AuthModule } from './auth/auth.module';
import {Comment} from "./entities/comment";
import * as dotenv from "dotenv";
import {Article} from "./entities/article";
import {Reaction} from "./entities/reaction";
import {Tag} from "./entities/tag";

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [
          User,
          Comment,
          Article,
          Reaction,
          Tag
      ],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
