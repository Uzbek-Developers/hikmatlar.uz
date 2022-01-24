import { Module } from '@nestjs/common';
import { RootController } from './root.controller';
import { RootService } from './root.service';
import { AuthorModule } from '../author/author.module';

@Module({
  imports: [AuthorModule],
  controllers: [RootController],
  providers: [RootService]
})
export class RootModule {}
