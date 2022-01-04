import { Module } from '@nestjs/common';
import { RootController } from './root.controller';
import { RootService } from './root.service';

@Module({
  imports: [],
  controllers: [RootController],
  providers: [RootService]
})
export class RootModule {}
