import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/registerUserDto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}
  @Post('register')
  async register(@Body() registerUserDto: RegisterDto) {
    //Logic for user register
    const token = await this.authService.registerUser(registerUserDto);
    return token;
  }

  @Post('login')
  login(@Body() loginUserDto: LoginDto) {
    return this.authService.login(loginUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const userId = req.user.sub;

    const user = await this.userService.getUserById(userId);

    console.log(user);
    return {
      id: user?.id,
      fname: user?.fname,
      lanme: user?.lname,
      email: user?.email,
      role: user?.role,
    };
  }
}
