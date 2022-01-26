import { Get, Controller } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { Page } from '../../shared/decorators/page.decorator';
import { RootService } from './root.service';

//
@Controller()
export class RootController {
  constructor(private readonly rootService: RootService) {}

  @ApiExcludeEndpoint()
  @Get('/')
  @Page('index')
  async root() {
    return await this.rootService.getHomePageData();
  }
}
