import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { LocalStrategy } from "./strategy/local.strategy";
import { PassportModule } from "@nestjs/passport";
import { LocalAuthGuard } from "./guard/localAuthGuard.guard";
import { SessionSerializer } from "./serializer/session.serializer";

@Module({
  providers: [AuthService, LocalStrategy, LocalAuthGuard, SessionSerializer],
  exports: [AuthService, LocalStrategy, LocalAuthGuard, SessionSerializer],
  controllers: [AuthController],
  imports: [
    PrismaModule,
    PassportModule.register({
      session: true,
    }),
  ],
})
export class AuthModule {}
