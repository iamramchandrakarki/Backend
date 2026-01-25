import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register() {
    //Logic for user register
    const result = this.authService.registerUser();
    return result;
  }
}
