import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CatModule } from './cat/cat.module';
import { CarModule } from './car/car.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserModule, PostModule, CatModule, CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
