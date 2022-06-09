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
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Cats')
@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}
  @ApiOperation({ summary: 'Get all cats' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: [
        {
          id: 1,
          name: 'Vasyl',
          breed: 'Siberian',
          year: 5,
          chipcode: 'ZXE-1111-2BV-111-20',
          vaccination: true,
          postId: 1,
          CatOwnerId: 1,
        },
        {
          id: 2,
          name: 'Murzik',
          breed: 'Scottish',
          year: 2,
          chipcode: 'ZXP-0111-3X-111-22',
          vaccination: true,
          postId: 2,
          CatOwnerId: 2,
        },
      ],
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.catService.getAll();
  }
  @ApiOperation({ summary: 'Get by one cat' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 2,
        name: 'Murzik',
        breed: 'Scottish',
        year: 2,
        chipcode: 'ZXP-0111-3X-111-22',
        vaccination: true,
        postId: 2,
        CatOwnerId: 2,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getOneCat(@Param('id') id: string) {
    return this.catService.getOneById(id);
  }
  @ApiOperation({ summary: 'Create by one cat' })
  @ApiBody({ type: CreateCatDto })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createCat(@Body() catDto: CreateCatDto) {
    return this.catService.createPost(catDto);
  }
  @ApiOperation({ summary: 'update cat by id' })
  @ApiBody({ type: UpdateCatDto })
  @HttpCode(HttpStatus.OK)
  @Put()
  updateCat(@Body() catDto: UpdateCatDto, @Param('id') id: string) {
    return this.catService.updateCat(catDto, id);
  }
  @ApiOperation({ summary: 'delete cat by id' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  deleteCat(@Param('id') id: string) {
    return this.catService.deleteCat(id);
  }
}
