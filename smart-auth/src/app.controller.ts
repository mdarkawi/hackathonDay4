import {Controller, Get, Post, Request, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {ApiResponse} from "@nestjs/swagger";
import {AuthService} from "./auth/auth.service";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiResponse({ status: 404, description: 'Not found' })
  @UsePipes(new ValidationPipe())
  @Post('auth/login')
  login(@Request() req) {
    return this.authService.generateToken(req.user);
  }
  getHello() {
    return 'Hello World!';
  }


}
