import { ApiProperty } from '@nestjs/swagger';

export class AuthorDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  description: string;
}
