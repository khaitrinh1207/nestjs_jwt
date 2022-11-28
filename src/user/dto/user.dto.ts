import { PickType } from '@nestjs/swagger';
import { UserDto } from '../../../prisma/generated-models/dtos';

export class GetUsersResponseDto extends PickType(UserDto, [
  'id',
  'email',
  'name',
  'age',
  'address',
]) {}
