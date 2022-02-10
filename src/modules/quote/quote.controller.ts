import { Get, Controller, Param } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { Page } from '../../shared/decorators/page.decorator';
import { QuoteService } from './quote.service';

@Controller()
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @ApiExcludeEndpoint()
  @Get('/random')
  @Page('random-quotes')
  async getRandomQuotes() {
    const quotes = await this.quoteService.findQuotesByRandom();
    return { quotes };
  }

  @ApiExcludeEndpoint()
  @Get('/:id')
  @Page('quote-detail')
  async quoteDetail(@Param('id') id: string) {
    const quote = await this.quoteService.findByIdWitRelations(id);
    return { quote };
  }
}
