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
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../guards';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { imageFileFilter } from '../utils';

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
  @UseGuards(AuthGuard)
  @Get('/')
  @UseGuards(AuthGuard)
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
        password: '123qwertA',
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
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: './avatar',
        filename: (req, file, callback) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return callback(null, `${randomName}${file.originalname}`);
        },
      }),
      fileFilter: imageFileFilter,
    }),
  )
  updateUser(
    @Body() userDto: UpdateUserDto,
    @Param('id') id: string,
    @UploadedFile() avatar: Express.Multer.File,
  ) {
    let newAvatarPath: string = null;
    try {
      if (avatar) {
        const randomName = Array(32)
          .fill(null)
          .map(() => Math.round(Math.random() * 16).toString(16))
          .join('');

        newAvatarPath = `avatar/${randomName}${avatar.originalname}`;
      }
      userDto.avatar = newAvatarPath;
      return this.userService.updateUser(userDto, id);
    } catch (e) {
      console.log(e);
    }
  }
  @Get('avatar/:image')
  watchFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './avatar' });
  }

  @ApiOperation({ summary: 'delete user by id' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
