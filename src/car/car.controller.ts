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
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Cars')
@Controller('cars')
export class CarController {
  constructor(private carService: CarService) {}
  @ApiOperation({ summary: 'Get all cars' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: [
        {
          id: 1,
          brand: 'Audi',
          model: 'A7',
          year: 2012,
          price: 20300,
          insurance: true,
          ownerId: 1,
          catId: 1,
        },
        {
          id: 2,
          brand: 'Range-Rover',
          model: 'Discovery',
          year: 2020,
          price: 156000,
          insurance: false,
          ownerId: 2,
          catId: 2,
        },
      ],
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.carService.getAll();
  }
  @ApiOperation({ summary: 'Get by one car' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 2,
        brand: 'Range-Rover',
        model: 'Discovery',
        year: 2020,
        price: 156000,
        insurance: false,
        ownerId: 2,
        catId: 2,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getOneCar(@Param('id') id: string) {
    return this.carService.getOneById(id);
  }
  @ApiOperation({ summary: 'Create by one car' })
  @ApiBody({ type: CreateCarDto })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createCar(@Body() carDto: CreateCarDto) {
    return this.carService.createCar(carDto);
  }
  @ApiOperation({ summary: 'update car by id' })
  @ApiBody({ type: UpdateCarDto })
  @HttpCode(HttpStatus.OK)
  @Put('/:id')
  updateCar(@Body() carDto: UpdateCarDto, @Param('id') id: string) {
    return this.carService.updateCar(carDto, id);
  }
  @ApiOperation({ summary: 'delete car by id' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  deleteCar(@Param('id') id: string) {
    return this.carService.deleteCar(id);
  }
}
