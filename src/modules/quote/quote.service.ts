import { Injectable } from '@nestjs/common';
import { Quote } from 'dist/src/entities/Quote';
import { from, Observable } from 'rxjs';
import { QuoteRepository } from './quote.repository';
@Injectable()
export class QuoteService {
  constructor(private readonly quoteRepository: QuoteRepository) {}
  findQuotes(): Observable<Quote[]> {
    return from(this.quoteRepository.find());
  }

  findQuotesByRandom(): Promise<Quote[]> {
    return this.quoteRepository.findByRandomOrder();
  }

  findById(id: string): Promise<Quote> {
    return this.quoteRepository.getQuoteById(id);
  }

  findByIdWitRelations(id: string): Promise<Quote> {
    return this.quoteRepository.findByIdWithRelatedColmns(id);
  }
}
