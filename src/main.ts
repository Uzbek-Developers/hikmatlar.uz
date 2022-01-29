import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import {
  NestFastifyApplication,
  FastifyAdapter
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { app as applicationConfig } from './config';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true
    })
  );

  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/'
  });
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars')
    },
    templates: join(__dirname, '..', 'views')
  });

  const config = new DocumentBuilder()
    .setTitle('Hikmatlar uz loyihasi')
    .setDescription('The hikmatlar API description')
    .setVersion('1.0')
    .setBasePath('/dashboard')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/dashboard/swagger', app, document);

  await app.listen(applicationConfig.port);
  console.log(
    `Application running on http://localhost:${applicationConfig.port}`
  );
}
bootstrap();
