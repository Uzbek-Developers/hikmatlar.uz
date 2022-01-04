import { Module } from '@nestjs/common';
import { RootModule } from './modules/root/root.module';

@Module({
  imports: [RootModule]
})
export class AppModule {}
