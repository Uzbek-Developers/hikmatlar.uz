import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RootModule } from './modules/root/root.module';
import { AuhorModule } from './modules/author/author.module';

@Module({
  imports: [TypeOrmModule.forRoot(), RootModule, AuhorModule]
})
export class AppModule {}
