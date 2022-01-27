import { Get, Controller } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { AuthorService } from './author.service';
import { Page } from '../../shared/decorators/page.decorator';

@Controller()
export class AuthorPageController {
  constructor(private readonly authorService: AuthorService) {}

  @ApiExcludeEndpoint()
  @Get('/')
  @Page('authors')
  async authorsList() {
    const authorsGroupByFirstChar = await this.authorService.GroupByFirstChar();
    return { authorsGroupByFirstChar };
  }
}
