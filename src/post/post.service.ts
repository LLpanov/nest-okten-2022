import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from '../core/prisma.service';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}
  async getAll(): Promise<Post[]> {
    return this.prismaService.post.findMany();
  }
  async getOneById(postId: string): Promise<Post> {
    return this.prismaService.post.findUnique({
      where: { id: Number(postId) },
    });
  }
  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prismaService.post.create({ data });
  }
  async updatePost(
    data: Prisma.PostUpdateInput,
    postId: string,
  ): Promise<Post> {
    return this.prismaService.post.update({
      where: { id: Number(postId) },
      data: { comment: data.comment, company: data.company },
    });
  }
  async deletePost(postId: string): Promise<Post> {
    return this.prismaService.post.delete({ where: { id: Number(postId) } });
  }
}
