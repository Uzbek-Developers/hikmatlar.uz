import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty()
  description: string;
}
