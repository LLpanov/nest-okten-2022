import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getALL() {
    return this.userService.getAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getOneUser(@Param('id') id: string) {
    return this.userService.getOneById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() UserDto: CreateUserDto) {
    return this.userService.createUser(UserDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
  @HttpCode(HttpStatus.OK)
  @Put('/:id')
  updateUser(@Body() userDto: UpdateUserDto, @Param('id') id: string) {
    return this.userService.updateUser(userDto, id);
  }
}
