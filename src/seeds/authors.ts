import { getRepository } from 'typeorm';
import * as faker from 'faker';

import { Author } from '../entities/Author';

export default async function authorsSeed() {
  try {
    const authorRepo = getRepository(Author);

    for (let i = 0; i < 5; i++) {
      const author = authorRepo.create({
        full_name: faker.unique(faker.hacker.noun, [], {
          maxRetries: 0,
          maxTime: 1
        }),
        description: faker.unique(faker.hacker.noun, [], {
          maxRetries: 0,
          maxTime: 1
        })
      });
      await authorRepo.save(author);
    }

    console.log('Create authors successfully!');
  } catch (error) {
    console.log(error);
  }
}
