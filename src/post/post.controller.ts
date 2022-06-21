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
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @ApiOperation({ summary: 'Get all posts' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: [
        {
          id: 1,
          comment: 'a few apple',
          company: 'LG',
          telephone: '+3920123451134',
          zipcode: 89016,
          authorId: 1,
        },
        {
          id: 2,
          comment: 'London is the capital of Great Britain',
          company: 'RockStars',
          telephone: '+32300001132341',
          zipcode: 114423,
          authorId: 2,
        },
      ],
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.postService.getAll();
  }

  @ApiOperation({ summary: 'Get by one post' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 2,
        comment: 'London is the capital of Great Britain',
        company: 'RockStars',
        telephone: '+32300001132341',
        zipcode: 114423,
        authorId: 2,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getOnePost(@Param('id') id: string) {
    return this.postService.getOneById(id);
  }

  @ApiOperation({ summary: 'Create by one post' })
  @ApiBody({ type: CreatePostDto })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createPost(@Body() postDto: CreatePostDto) {
    return this.postService.createPost(postDto);
  }

  @ApiOperation({ summary: 'update post by id' })
  @ApiBody({ type: UpdatePostDto })
  @HttpCode(HttpStatus.OK)
  @Put(':id')
  updatePost(@Body() postDto: UpdatePostDto, @Param('id') id: string) {
    return this.postService.updatePost(postDto, id);
  }

  @ApiOperation({ summary: 'delete post by id' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postService.deletePost(id);
  }
}
