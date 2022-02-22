import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
