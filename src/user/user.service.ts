import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users = [];

  getAll() {
    return this.users;
  }

  getOneById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  createUser(userDto: CreateUserDto) {
    this.users.push({
      ...userDto,
      id: new Date().valueOf(),
    });
    return userDto;
  }

  // deleteUser(userDto: CreateUserDto) {
  //   this.users.splice(users.indexOf(userDto), 1);

  deleteUser(id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
  }
  updateUser(userDto: UpdateUserDto, id: string) {
    const changeUser = this.users.find((user) => user.id === id);
    changeUser === userDto;
    return userDto;
  }
}
