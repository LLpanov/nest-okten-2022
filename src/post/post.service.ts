import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  private posts = [];

  getALL() {
    return this.posts;
  }

  getOneById(id: string) {
    return this.posts.find((post) => post.id === id);
  }

  createPost(postDto: CreatePostDto) {
    this.posts.push({ ...postDto, id: new Date().valueOf() });
    return postDto;
  }

  deletePost(id: string) {
    const index = this.posts.findIndex((post) => post.id === id);
    this.posts.splice(index, 1);
  }
  updatePost(postDto: CreatePostDto, id: string) {
    const changePost = this.posts.find((post) => post.id === id);
    changePost === postDto;
    return postDto;
  }
}
