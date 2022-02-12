import { Injectable } from '@nestjs/common';
import { AuthorService } from '../author/author.service';
import { QuoteService } from '../quote/quote.service';
@Injectable()
export class RootService {
  constructor(
    private readonly authorService: AuthorService,
    private readonly quoteService: QuoteService
  ) {}
  async getHomePageData(): Promise<any> {
    const lastAuthors = await this.authorService.getLastAuthors();
    return {
      lastAuthors
    };
  }
}
