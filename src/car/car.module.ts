import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { PrismaService } from '../core/prisma.service';

@Module({
  providers: [CarService, PrismaService],
  imports: [],
  controllers: [CarController],
})
export class CarModule {}
