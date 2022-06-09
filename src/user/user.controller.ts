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
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: [
        {
          id: 1,
          username: 'Harry',
          surname: 'Potter',
          email: 'roles@gmail.com',
          age: 18,
          city: 'London',
          profession: 'Wizard',
        },
        {
          id: 2,
          username: 'Nicokolai',
          surname: 'Apollo',
          email: 'harry@yahoo.com',
          age: 34,
          city: 'Boston',
          profession: 'Tennis Player',
        },
      ],
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  getALL() {
    return this.userService.getAll();
  }

  @ApiOperation({ summary: 'Get by one user' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        username: 'Harry',
        surname: 'Potter',
        email: 'roles@gmail.com',
        age: 18,
        city: 'London',
        profession: 'Wizard',
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return this.userService.getOneById(id);
  }
  @ApiOperation({ summary: 'Create one user' })
  @ApiBody({ type: CreateUserDto })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() UserDto: CreateUserDto) {
    return this.userService.createUser(UserDto);
  }
  @ApiOperation({ summary: 'update user by id' })
  @ApiBody({ type: UpdateUserDto })
  @HttpCode(HttpStatus.OK)
  @Put(':id')
  updateUser(@Body() userDto: UpdateUserDto, @Param('id') id: string) {
    return this.userService.updateUser(userDto, id);
  }
  @ApiOperation({ summary: 'delete user by id' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
