import { Injectable } from '@nestjs/common';
import { Cat, Prisma } from '@prisma/client';
import { PrismaService } from '../core/prisma.service';

@Injectable()
export class CatService {
  constructor(private prismaService: PrismaService) {}
  async getAll(): Promise<Cat[]> {
    return this.prismaService.cat.findMany();
  }
  async getOneById(catId: string): Promise<Cat> {
    return this.prismaService.cat.findUnique({ where: { id: Number(catId) } });
  }
  async createPost(data: Prisma.CatCreateInput): Promise<Cat> {
    return this.prismaService.cat.create({ data });
  }
  async updateCat(data: Prisma.CatUpdateInput, catId: string): Promise<Cat> {
    return this.prismaService.cat.update({
      where: { id: Number(catId) },
      data: {
        year: data.year,
        chipcode: data.chipcode,
        vaccination: data.vaccination,
      },
    });
  }
  async deleteCat(catId: string): Promise<Cat> {
    return this.prismaService.cat.delete({ where: { id: Number(catId) } });
  }
}
