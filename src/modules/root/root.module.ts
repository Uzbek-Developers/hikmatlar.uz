import { Module } from '@nestjs/common';
import { RootController } from './root.controller';
import { RootService } from './root.service';
import { AuthorModule } from '../author/author.module';
import { QuoteModule } from '../quote/quote.module';

@Module({
  imports: [AuthorModule, QuoteModule],
  controllers: [RootController],
  providers: [RootService]
})
export class RootModule {}
