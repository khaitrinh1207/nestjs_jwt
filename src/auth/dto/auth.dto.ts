import { ApiProperty, PickType } from '@nestjs/swagger';
import { UserDto } from '../../../prisma/generated-models/dtos';

export class RegisterUserDto extends PickType(UserDto, [
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
