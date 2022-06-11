import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { PrismaService } from '../core/prisma.service';

@Module({
  providers: [AuthService, UserService, PrismaService],
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'Secret',
      signOptions: {
        expiresIn: '24 hours',
      },
    }),
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
