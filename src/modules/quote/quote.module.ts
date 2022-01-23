import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuoteService } from './quote.service';
import { QuoteRepository } from './quote.repository';
import { QuoteController } from './quote.controller';
@Module({
  controllers: [QuoteController],
  imports: [TypeOrmModule.forFeature([QuoteRepository])],
  exports: [QuoteService],
  providers: [QuoteService]
})
export class QuoteModule {}
