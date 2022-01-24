import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorRepository } from './auhtor.repository';
import { AuthorsController } from './author.controller';
import { AuthorService } from './author.service';

@Module({
  controllers: [AuthorsController],
  imports: [TypeOrmModule.forFeature([AuthorRepository])],
  providers: [AuthorService],
  exports: [AuthorService]
})
export class AuhorModule {}
