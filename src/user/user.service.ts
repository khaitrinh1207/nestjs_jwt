import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    try {
      const users = await this.prisma.user.findMany({
        where: {
          deletedAt: null,
        },
        select: {
          id: true,
          email: true,
          address: true,
          age: true,
          name: true,
        },
      });
      return {
        code: HttpStatus.OK,
        data: users,
      };
    } catch (err) {
      console.log(`error:::${err.message}`);
    }
  }
}
