import { PickType } from '@nestjs/swagger';
import { User } from 'prisma/generated-models/user';

export class CreateUserRequestDto extends PickType(User, [
  'email',
  'age',
  'address',
  'name',
  'password',
]) {}
