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
}
