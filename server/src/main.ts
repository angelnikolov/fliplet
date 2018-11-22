import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    cors({
      origin: '*',
      allowedHeaders: ['Content-Type', 'Origin'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    }),
  );
  app.useStaticAssets(join(__dirname, '..', '../client/dist'));

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
