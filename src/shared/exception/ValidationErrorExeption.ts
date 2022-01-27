import { HttpStatus } from '@nestjs/common';
import { DefaultHttpException } from './DefaultHttpException';
import { ApiProperty } from '@nestjs/swagger';

export class ValidationErrorExeption implements DefaultHttpException {
  @ApiProperty()
  statusCode: HttpStatus;

  @ApiProperty()
  message: string[];

  @ApiProperty()
  error: string;
}
