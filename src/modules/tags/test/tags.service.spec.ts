import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'jest-extended';
import { TagRepository } from '../tags.repository';
import { TagsService } from '../tags.service';

describe('TagsService', () => {
  let service: TagsService;
  let repository: TagRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({ keepConnectionAlive: true }),
        TypeOrmModule.forFeature([TagRepository])
      ],
      providers: [TagsService]
    }).compile();

    service = module.get<TagsService>(TagsService);
    repository = module.get<TagRepository>(TagRepository);
  });

  describe('Tags service', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });

  describe('Tags group by first char', () => {
    it('should be get tags by first char', async () => {
      const tags = [
        { name: 'Abound' },
        { name: 'Bussiness' },
        { name: 'Education' },
        { name: 'ESport' }
      ];

      const data = await repository.insert(tags);

      const tagsIds: string[] = data.raw.map((tag) => tag.id);

      const tagsGroupByFirstChar = await service.GroupByFirstChar();

      expect(tagsGroupByFirstChar).toEqual(expect.toBeArray());

      tagsGroupByFirstChar.forEach((tagGroup) => {
        expect(tagGroup).toContainKeys(['char_group', 'tags']);
        expect(tagGroup.char_group).toBeString();
        expect(tagGroup.tags).toEqual(expect.toBeArray());
        tagGroup.tags.forEach((tag) => {
          expect(tag).toContainKeys(['id', 'name']);
        });
      });

      expect(tagsGroupByFirstChar).toIncludeAllPartialMembers([
        { char_group: 'a' },
        { char_group: 'b' },
        { char_group: 'e' }
      ]);

      await repository.delete(tagsIds);
    });
  });
});
