import { ApiProperty } from '@nestjs/swagger';

export class TagDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
