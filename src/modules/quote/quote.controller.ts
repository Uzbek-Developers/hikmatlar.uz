import { Get, Controller } from '@nestjs/common';
import { Page } from '../../shared/decorators/page.decorator';
import { QuoteService } from './quote.service';

@Controller()
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get('/random')
  @Page('random-quotes')
  async getRandomQuotes() {
    const quotes = await this.quoteService.findQuotesByRandom();
    return { quotes };
  }
}
