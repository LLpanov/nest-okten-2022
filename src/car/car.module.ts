import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';

@Module({
  providers: [CarService],
  imports: [],
  controllers: [CarController],
})
export class CarModule {}
