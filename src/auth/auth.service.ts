import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async registration(userDto: CreateUserDto) {
    const findUser = await this.userService.getUserByEmail(userDto.email);
    if (findUser) {
      throw new HttpException('user is already exist', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(userDto.password, 6);
    const user = await this.userService.createUser({
      ...userDto,

    });

    return this.generateToken(user);
  }
  private generateToken(user: User) {
    const playload = { email: user.email, id: user.id, name: user.surname };
    return {
      token: this.jwtService.sign(playload),
    };
  }
}
