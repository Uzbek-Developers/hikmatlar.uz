import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import {
  NestFastifyApplication,
  FastifyAdapter
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { app as applicationConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/'
  });
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars')
    },
    templates: join(__dirname, '..', '..', 'views')
  });
  await app.listen(applicationConfig.port);
  console.log(
    `Application running on http://localhost:${applicationConfig.port}`
  );
}
bootstrap();
