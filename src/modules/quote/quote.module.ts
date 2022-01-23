import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuoteService } from './quote.service';
import { QuoteRepository } from './quote.repository';
@Module({
  imports: [TypeOrmModule.forFeature([QuoteRepository])],
  exports: [QuoteService],
  providers: [QuoteService]
})
export class QuoteModule {}
