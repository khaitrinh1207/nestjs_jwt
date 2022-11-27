import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { GetUsersResponseDto } from './dto/user.dto';

@Controller('users')
@ApiTags('Users')
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
