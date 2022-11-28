import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { LocalStrategy } from './strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
  controllers: [AuthController],
  imports: [PrismaModule, PassportModule],
})
export class AuthModule {}
