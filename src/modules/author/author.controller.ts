import { Get, Controller } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Page } from '../../shared/decorators/page.decorator';

@Controller()
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get('/')
  @Page('authors')
  async authorsList() {
    const authorsGroupByFirstChar = await this.authorService.GroupByFirstChar();
    console.log(authorsGroupByFirstChar);
    return { authorsGroupByFirstChar };
  }
}
