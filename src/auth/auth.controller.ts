import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginRequestDto, RegisterUserDto } from './dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @ApiBody({
    type: RegisterUserDto,
    description: 'register',
  })
  @ApiCreatedResponse({
    description: 'create user success',
  })
  @ApiBadRequestResponse({
    description: 'bad request',
  })
  @Post('register')
  async register(@Body() user: RegisterUserDto) {
    const check = await this.service.checkEmailExist(user.email);
    if (check) {
      throw new HttpException(
        { message: 'email already exist' },
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.service.registerUser(user);
  }

  @ApiBody({
    type: LoginRequestDto,
    description: 'login',
  })
  @ApiCreatedResponse({
    description: 'login success',
  })
  @ApiBadRequestResponse({
    description: 'bad request',
  })
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() user: LoginRequestDto) {
    console.log(user);
    // return this.service.login(user);
    return user;
  }
}
