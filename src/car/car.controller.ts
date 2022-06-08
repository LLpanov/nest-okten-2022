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
import { CarService } from './car.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
export class CarController {
  constructor(private carService: CarService) {}
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.carService.getAll();
  }
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getOneCar(@Param('id') id: string) {
    return this.carService.getOneById(id);
  }
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createCar(@Body() carDto: CreateCarDto) {
    return this.carService.createCar(carDto);
  }
  @HttpCode(HttpStatus.OK)
  @Put('/:id')
  updateCar(@Body() carDto: UpdateCarDto, @Param('id') id: string) {
    return this.carService.updateCar(carDto, id);
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  deleteCar(@Param('id') id: string) {
    return this.carService.deleteCar(id);
  }
}
