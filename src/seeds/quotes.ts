import * as faker from 'faker';
import { getRepository } from 'typeorm';

import { Quote } from '../entities/Quote';
import { Author } from '../entities/Author';
import { Tag } from '../entities/Tag';

export default async function quoteSeed() {
  try {
    const quoteRepo = getRepository(Quote);
    const tagRepo = getRepository(Tag);
    const authorRepo = getRepository(Author);

    const authors = await authorRepo.find();
    const tags = await tagRepo.find();

    for (let i = 0; i < 5; i++) {
      const quoteAuthorIndex = Math.ceil(Math.random() * authors.length);
      const quote = quoteRepo.create({
        content: faker.lorem.sentence(30, 240),
        cover_img: faker.image.abstract(),
        views: Math.ceil(Math.random() * 200),
        author: authors[quoteAuthorIndex],
        tags
      });
      console.log(quote);
      await quoteRepo.save(quote);
    }
  } catch (e) {
    console.log(e);
  }
}
