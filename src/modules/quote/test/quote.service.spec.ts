import 'jest-extended';
import { QuoteService } from '../../quote/quote.service';
import { QuoteRepository } from '../quote.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorRepository } from '../../author/auhtor.repository';

describe('QuoteService', () => {
  let service: QuoteService;
  let repository: QuoteRepository;
  let authorRepository: AuthorRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({ keepConnectionAlive: true }),
        TypeOrmModule.forFeature([QuoteRepository, AuthorRepository])
      ],
      providers: [QuoteService]
    }).compile();

    service = module.get<QuoteService>(QuoteService);
    repository = module.get<QuoteRepository>(QuoteRepository);
    authorRepository = module.get<AuthorRepository>(AuthorRepository);
  });

  describe('Author service', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });

  describe('Quotes by random', () => {
    it('should be get quotes by random', async () => {
      const authors = await authorRepository.getLastAuthors();
      const quotes = [
        {
          content: 'A quote',
          views: 20,
          cover_img: '',
          author: authors[0]
        },
        {
          content: 'A quote',
          views: 16,
          cover_img: '',
          author: authors[0]
        },
        {
          content: 'A quote',
          views: 6,
          cover_img: '',
          author: authors[0]
        }
      ];

      const data = await repository.insert(quotes);

      const quoteIds: string[] = data.raw.map((quote) => quote.id);

      const quotesByRandom = await service.findQuotesByRandom();

      expect(quotesByRandom).toEqual(expect.toBeArray());

      quotesByRandom.forEach((quotesGroup) => {
        expect(quotesGroup).toContainAnyKeys([
          'id',
          'content',
          'author',
          'views',
          'cover_img',
          'created_at',
          'updated_at'
        ]);
        expect(quotesGroup.id).toBeString();
        expect(quotesGroup.content).toBeString();
        expect(quotesGroup.views).toBeNumber();
        expect(quotesGroup.cover_img).toBeString();
        expect(quotesGroup.created_at).toBeDate();
        expect(quotesGroup.updated_at).toBeDate();
        expect(quotesGroup.author).toContainAnyKeys([
          'id',
          'full_name',
          'description'
        ]);
      });

      await repository.delete(quoteIds);
    });
  });
});
