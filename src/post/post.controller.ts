import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.postService.getALL();
  }
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getOnePost(@Param('id') id: string) {
    return this.postService.getOneById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createPost(@Body() postDto: CreatePostDto) {
    return this.postService.createPost(postDto);
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  deletePost(@Body('id') id: string) {
    return this.postService.deletePost(id);
  }
  @HttpCode(201)
  @Patch('/:id')
  updatePost(@Body() postDto: UpdatePostDto, @Param('id') id: string) {
    return this.postService.updatePost(postDto, id);
  }
}
