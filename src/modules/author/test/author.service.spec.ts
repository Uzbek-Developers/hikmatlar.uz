import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorService } from '../author.service';
import { AuthorRepository } from '../auhtor.repository';
import 'jest-extended';

describe('AuthorService', () => {
  let service: AuthorService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({ keepConnectionAlive: true }),
        TypeOrmModule.forFeature([AuthorRepository])
      ],
      providers: [AuthorService]
    }).compile();

    service = module.get<AuthorService>(AuthorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be get LastAuthors', async () => {
    const getLastAuthors = await service.getLastAuthors();
    expect(getLastAuthors).toEqual(expect.toBeArray());
    getLastAuthors.forEach((author) => {
      expect(author).toContainAnyKeys(['id', 'full_name', 'description']);
    });
  });
});
