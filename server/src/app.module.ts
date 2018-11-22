import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RssModule } from './rss/rss.module';

@Module({
  imports: [RssModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
