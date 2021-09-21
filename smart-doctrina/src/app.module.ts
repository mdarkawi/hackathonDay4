import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user";
import {Article} from "./entities/article";
import {Comment} from "./entities/comment";
import {Reaction} from "./entities/reaction";
import {Tag} from "./entities/tag";
import * as dotenv from 'dotenv';

dotenv.config()
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
          Article,
          Comment,
          Reaction,
          Tag
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
