import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * set up cors for dev purposes
   */
  app.use(
    cors({
      origin: '*',
      allowedHeaders: ['Content-Type', 'Origin'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    }),
  );
  /**
   * this sets up a static asset middleware which will make all asset requests from the SPA to be routed to its assets
   * all /api requests will go through the server routing
   */
  app.useStaticAssets(join(__dirname, '..', '../client/dist'));

  /**
   * a really cool way to validate user inputs based on the class-validator library
   */
  app.useGlobalPipes(new ValidationPipe());

  /**
   * in prod, listen to 80
   */
  await app.listen(process.env.NODE_ENV === 'production' ? 80 : 3000);
}
bootstrap();
