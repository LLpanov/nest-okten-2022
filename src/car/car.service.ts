import { Injectable } from '@nestjs/common';
import { Car, Prisma } from '@prisma/client';
import { PrismaService } from '../core/prisma.service';

@Injectable()
export class CarService {
  constructor(private prismaService: PrismaService) {}
  async getAll(): Promise<Car[]> {
    return this.prismaService.car.findMany();
  }
  async getOneById(carId: string): Promise<Car> {
    return this.prismaService.car.findUnique({
      where: { id: Number(carId) },
    });
  }
  async createCar(data: Prisma.CarCreateInput): Promise<Car> {
    return this.prismaService.car.create({ data });
  }
  async updateCar(data: Prisma.CarUpdateInput, carId: string): Promise<Car> {
    return this.prismaService.car.update({
      where: { id: Number(carId) },
      data: { insurance: data.insurance, price: data.price },
    });
  }
  async deleteCar(carId: string): Promise<Car> {
    return this.prismaService.car.delete({ where: { id: Number(carId) } });
  }
}
