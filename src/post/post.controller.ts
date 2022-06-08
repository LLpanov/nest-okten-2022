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

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.postService.getAll();
  }
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getOnePost(@Param('id') id: string) {
    return this.postService.getOneById(id);
  }
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createPost(@Body() postDto: CreatePostDto) {
    return this.postService.createPost(postDto);
  }
  @HttpCode(HttpStatus.OK)
  @Put(':id')
  updatePost(@Body() postDto: UpdatePostDto, @Param('id') id: string) {
    return this.postService.updatePost(postDto, id);
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postService.deletePost(id);
  }
}
