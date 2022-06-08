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
import { CreateCatDto, UpdateCatDto } from './dto';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
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
    return this.catService.createPost(catDto);
  }
  @HttpCode(HttpStatus.OK)
  @Put()
  updateCat(@Body() catDto: UpdateCatDto, @Param('id') id: string) {
    return this.catService.updateCat(catDto, id);
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  deleteCat(@Param('id') id: string) {
    return this.catService.deleteCat(id);
  }
}
