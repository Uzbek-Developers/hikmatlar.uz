import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorRepository } from './auhtor.repository';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
@Module({
  controllers: [AuthorController],
  imports: [TypeOrmModule.forFeature([AuthorRepository])],
  providers: [AuthorService],
  exports: [AuthorService]
})
export class AuthorModule {}
