import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto';
import { CreateUserDto } from '../user/dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiOperation({ summary: 'get  users token  and log in ' })
  @ApiOkResponse({
    status: 201,
    schema: {
      example: {
        email: 'mongo@gmail.com',
        password: 'type password or login with token',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6mixXJkQHlhaG9vLmNvbSIsImlkIjo0LCJuYW1lIjoiWnVyYXZsZXYiLCJpYXQiOjE2NTUwMzAyNjksImV4cCI6MTY1NTExNjY2OX0.ET0ozxFJR119AI0Ujn7ZbW-F0fZx6yiMXF67i015qyA',
      },
    },
  })
  @HttpCode(201)
  @Post('/login')
  loginUser(@Body() authDto: AuthUserDto) {
    return this.authService.login(authDto);
  }
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'registration user' })
  @ApiBody({ type: CreateUserDto })
  @Post('/registration')
  registrationUser(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
