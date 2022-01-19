import { Get, Controller } from '@nestjs/common';
import { Page } from 'src/shared/decorators/page.decorator';

@Controller()
export class RootController {
  @Get()
  @Page('index.hbs')
  root() {
    return { message: 'Hello !' };
  }
}
