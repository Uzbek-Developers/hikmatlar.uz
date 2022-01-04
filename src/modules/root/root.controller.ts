import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class RootController {
  @Get()
  @Render('index.hbs')
  root() {
    return { message: 'Hello !' };
  }
}
