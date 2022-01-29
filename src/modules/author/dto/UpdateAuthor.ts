import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAuthorDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  full_name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string;
}
