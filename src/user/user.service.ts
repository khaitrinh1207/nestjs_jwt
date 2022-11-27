import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserRequestDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(user: CreateUserRequestDto) {
    try {
      const new_user = await this.prisma.user.create({
        data: user,
      });
      return {
        status: HttpStatus.CREATED,
        data: {
          id: new_user.id,
          email: new_user.email,
        },
      };
    } catch (error) {
      console.log(`err:::${error}`);
    }
  }
}
