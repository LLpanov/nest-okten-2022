import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../core/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async getAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }
  async getOneById(userId: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { id: Number(userId) },
      include: { posts: true, cats: true, cars: true },
    });
  }
  async getUserByEmail(userEmail: string): Promise<User> {
    return this.prismaService.user.findFirst({ where: { email: userEmail } });
  }
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({ data });
  }
  async updateUser(
    data: Prisma.UserUpdateInput,
    userId: string,
  ): Promise<User> {
    return this.prismaService.user.update({
      where: { id: Number(userId) },
      data: { age: data.age, city: data.city, profession: data.profession },
    });
  }
  async deleteUser(userId: string): Promise<User> {
    return this.prismaService.user.delete({ where: { id: Number(userId) } });
  }
}
