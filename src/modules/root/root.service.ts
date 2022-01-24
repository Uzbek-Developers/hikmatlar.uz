import { Injectable } from '@nestjs/common';
import { AuthorService } from '../author/author.service';
@Injectable()
export class RootService {
  constructor(private readonly authorService: AuthorService) {}
  async getHomePageData(): Promise<any> {
    const lastAuthors = await this.authorService.getLastAuthors();
    return {
      lastAuthors
    };
  }
}
