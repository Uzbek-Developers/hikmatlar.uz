import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateCategoryDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
