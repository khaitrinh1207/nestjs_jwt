import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class User {
  @ApiProperty({ type: String })
  id: string = undefined;

  @ApiProperty({ type: String })
  email: string = undefined;

  @ApiPropertyOptional({ type: String })
  name?: string = undefined;

  @ApiPropertyOptional({ type: Number })
  age?: number = undefined;

  @ApiPropertyOptional({ type: String })
  address?: string = undefined;

  @ApiProperty({ type: String })
  password: string = undefined;

  @ApiProperty({ type: Date })
  createdAt: Date = undefined;

  @ApiProperty({ type: Date })
  updatedAt: Date = undefined;

  @ApiPropertyOptional({ type: Date })
  deletedAt?: Date = undefined;
}
