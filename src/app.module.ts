import { RouterModule } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RootModule } from './modules/root/root.module';
import { AuthorModule } from './modules/author/author.module';
import { QuoteModule } from './modules/quote/quote.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RootModule,
    QuoteModule,
    RouterModule.register([
      {
        path: '/',
        module: RootModule
      },
      {
        path: '/authors',
        module: AuthorModule
      },
      {
        path: '/quotes',
        module: QuoteModule
      }
    ])
  ]
})
export class AppModule {}
