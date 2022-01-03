import { getRepository, createConnection } from 'typeorm';
import * as faker from 'faker';
import { Tag } from '../src/entities/Tag';

(async function () {
  try {
    await createConnection();
  } catch (e) {
    console.log(e);
  }
  const tagRepo = getRepository(Tag);

  for (let i = 0; i < 10; i++) {
    const tag = tagRepo.create({
      name: faker.unique(faker.hacker.noun, [], { maxRetries: 0, maxTime: 1 })
    });
    await tagRepo.save(tag);
  }
})();
