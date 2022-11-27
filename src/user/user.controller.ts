import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserRequestDto } from './dto/user.dto';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private service: UserService) {}

  @ApiBody({
    type: CreateUserRequestDto,
    description: 'create user',
  })
  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @Post()
  async createUser(@Body() user: CreateUserRequestDto) {
    return await this.service.createUser(user);
  }
}
