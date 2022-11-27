import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginRequestDto, RegisterUserDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async registerUser(user: RegisterUserDto) {
    try {
      const hashPassword = await bcrypt.hash(user.password, 10);
      const new_user = await this.prisma.user.create({
        data: {
          ...user,
          password: hashPassword,
        },
      });
      return {
        status: HttpStatus.CREATED,
        data: {
          id: new_user.id,
          email: new_user.email,
        },
      };
    } catch (error) {
      console.log(`Register error ::: ${error}`);
    }
  }

  async login(data: LoginRequestDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      throw new HttpException(
        {
          message: 'User does not exist',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const check = await bcrypt.compare(data.password, user.password);

    if (!check) {
      throw new HttpException(
        {
          message: 'password is incorrect',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return user;
  }

  logOut() {
    return null;
  }

  async checkEmailExist(email: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });
      return !!user;
    } catch (e) {
      return false;
    }
  }
}
