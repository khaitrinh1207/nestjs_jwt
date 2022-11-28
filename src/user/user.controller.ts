import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { GetUsersResponseDto } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@ApiTags('Users')
@UseGuards(AuthGuard('local'))
export class UserController {
  constructor(private service: UserService) {}

  @ApiOkResponse({
    isArray: true,
    type: GetUsersResponseDto,
    description: 'Success',
  })
  @ApiBadRequestResponse({
    description: 'Bad request',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @Get()
  getAll() {
    return this.service.getAll();
  }
}
