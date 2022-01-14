import { getRepository } from 'typeorm';
import * as faker from 'faker';

import { Author } from '../entities/Author';
import { Quote } from '../entities/Quote';

export default async function quotesSeed() {
  try {
    const authorRepo = getRepository(Author);
    const quotesRepo = getRepository(Quote);

    const authors = await authorRepo.find();

    for (let i = 0; i < 5; i++) {
      const quote = quotesRepo.create({
        author: authors[i],
        content: faker.unique(faker.hacker.noun, [], {
          maxRetries: 0,
          maxTime: 1
        }),
        views: faker.unique(faker.datatype.number, [], {
          maxRetries: 0,
          maxTime: 1
        }),
        cover_img: faker.unique(faker.hacker.noun, [], {
          maxRetries: 0,
          maxTime: 1
        })
      });

      await quotesRepo.save(quote);
    }

    console.log(`Create quotes successfully!`);
  } catch (error) {
    console.log(error);
  }
}
