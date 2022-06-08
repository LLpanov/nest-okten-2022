import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { PrismaService } from '../core/prisma.service';

@Module({
  providers: [CatService, PrismaService],
  imports: [],
  controllers: [CatController],
})
export class CatModule {}
