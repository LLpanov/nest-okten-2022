import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { AuthUserDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login(authDto: AuthUserDto) {
    const user = await this.validateUser(authDto);
    return this.generateToken(user);
  }

  async registration(userDto: CreateUserDto) {
    const findUser = await this.userService.getUserByEmail(userDto.email);
    if (findUser) {
      throw new HttpException('user is already exist', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(userDto.password, 9);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });

    return this.generateToken(user);
  }
  private async generateToken(user: User) {
    const playload = { email: user.email, id: user.id, name: user.surname };
    return {
      token: this.jwtService.sign(playload),
    };
  }
  private async validateUser(user: AuthUserDto) {
    const userDB = await this.userService.getUserByEmail(user.email);
    const passwordEqual = await bcrypt.compare(user.password, userDB.password);
    if (userDB && passwordEqual) {
      return userDB;
    }
    throw new UnauthorizedException({ message: 'wrong email or password' });
  }

  async getVerifiedUserId(jwt: string): Promise<string | null> {
    try {
      const token = this.getTokenFromJwt(jwt);
      const user = this.jwtService.verify(token, { secret: 'Secret' });
      return user.id;
    } catch (e) {
      throw new UnauthorizedException(HttpStatus.UNAUTHORIZED);
    }
  }
  private getTokenFromJwt(jwt: string) {
    return jwt.split(' ')[1];
  }
}
