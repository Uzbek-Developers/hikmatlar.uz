import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorService } from '../author.service';
import { AuthorRepository } from '../auhtor.repository';
import 'jest-extended';

describe('AuthorService', () => {
  let service: AuthorService;
  let repository: AuthorRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({ keepConnectionAlive: true }),
        TypeOrmModule.forFeature([AuthorRepository])
      ],
      providers: [AuthorService]
    }).compile();

    service = module.get<AuthorService>(AuthorService);
    repository = module.get<AuthorRepository>(AuthorRepository);
  });

  describe('Author service', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });

  describe('Get LastAuthors', () => {
    it('should be get LastAuthors', async () => {
      const getLastAuthors = await service.getLastAuthors();
      expect(getLastAuthors).toEqual(expect.toBeArray());
      getLastAuthors.forEach((author) => {
        expect(author).toContainAnyKeys(['id', 'full_name', 'description']);
      });
    });
  });

  describe('Authors group by firs char', () => {
    it('should be get authors group by first char', async () => {
      const authors = [
        {
          full_name: 'Abu Bakr r.a',
          description: ''
        },
        {
          full_name: 'Umar r.a',
          description: ''
        },
        {
          full_name: 'Usmon r.a',
          description: ''
        },
        {
          full_name: 'Ali r.a',
          description: ''
        },
        {
          full_name: 'Bilal r.a',
          description: ''
        }
      ];
      const data = await repository.insert(authors);
      const authorIds: string[] = data.raw.map((author) => author.id);
      const authorsGroupByFirstChar = await service.GroupByFirstChar();
      console.log(authorsGroupByFirstChar);
      expect(authorsGroupByFirstChar).toEqual(expect.toBeArray());

      authorsGroupByFirstChar.forEach((group) => {
        expect(group).toContainAnyKeys(['char_group', 'authors']);
        expect(group.char_group).toBeString();
        expect(group.authors).toEqual(expect.toBeArray());
        group.authors.forEach((author) => {
          expect(author).toContainAnyKeys(['id', 'full_name', 'description']);
        });
      });
      expect(authorsGroupByFirstChar).toIncludeAllPartialMembers([
        { char_group: 'a' },
        { char_group: 'b' },
        { char_group: 'u' }
      ]);
      await repository.delete(authorIds);
    });
  });
});
