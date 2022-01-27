import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorRepository } from './auhtor.repository';
import { AuthorService } from './author.service';
import { AuthorPageController } from './author-page.controller';
@Module({
  controllers: [AuthorPageController],
  imports: [TypeOrmModule.forFeature([AuthorRepository])],
  providers: [AuthorService],
  exports: [AuthorService]
})
export class AuthorModule {}
