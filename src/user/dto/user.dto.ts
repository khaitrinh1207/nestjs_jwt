import { PickType } from '@nestjs/swagger';
import { User } from 'prisma/generated-models/user';

export class GetUsersResponseDto extends PickType(User, [
  'id',
  'email',
  'name',
  'age',
  'address',
]) {}
