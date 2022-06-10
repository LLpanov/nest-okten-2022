import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto';
import { CreateUserDto } from '../user/dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/login')
  loginUser(@Body() authDto: AuthUserDto) {
    return this.authService.login(authDto);
  }
  @Post('/registration')
  registrationUser(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
