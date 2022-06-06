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
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}
  @HttpCode(HttpStatus.OK)
  @Get()
  getALL() {
    return this.catService.getAll();
  }
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getOneCat(@Param('id') id: string) {
    return this.catService.getOneById(id);
  }
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createCat(@Body() catDto: CreateCatDto) {
    return this.catService.createCat(catDto);
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  deleteCat(@Param('id') id: string) {
    return this.catService.deleteCat(id);
  }
  @HttpCode(201)
  @Put('/:id')
  updateCat(@Body() catDto: CreateCatDto, @Param('id') id: string) {
    return this.catService.updateCat(catDto, id);
  }
}
