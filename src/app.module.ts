import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [UserModule, PostModule, AnimalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
