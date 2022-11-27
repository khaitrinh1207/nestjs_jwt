import { ApiProperty, PickType } from '@nestjs/swagger';
import { User } from '../../../prisma/generated-models/user';

export class RegisterUserDto extends PickType(User, [
  'email',
  'age',
  'address',
  'name',
  'password',
]) {}

export class LoginRequestDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
