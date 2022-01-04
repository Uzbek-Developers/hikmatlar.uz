import { getRepository } from 'typeorm';
import * as faker from 'faker';

import { Tag } from '../entities/Tag';
export default async function tagsSeed() {
  try {
    const tagRepo = getRepository(Tag);

    for (let i = 0; i < 5; i++) {
      const tag = tagRepo.create({
        name: faker.unique(faker.hacker.noun, [], { maxRetries: 0, maxTime: 1 })
      });
      await tagRepo.save(tag);
    }
    console.log('Create tags successfully!');
  } catch (e) {
    console.log(e);
  }
}
