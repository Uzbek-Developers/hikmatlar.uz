import { Module } from '@nestjs/common';
import { RootController } from './root.controller';
import { RootService } from './root.service';
import { AuhorModule } from '../author/author.module';

@Module({
  imports: [AuhorModule],
  controllers: [RootController],
  providers: [RootService]
})
export class RootModule {}
