import { HttpStatus } from '@nestjs/common';

export interface DefaultHttpException {
  statusCode: HttpStatus;
  message: any | any[];
  error: string;
}
