import { CacheModule, Module } from '@nestjs/common';
import { RssController } from './rss.controller';
import { RssService } from './rss.service';

@Module({
  imports: [
    // configure caching just for this module with a time to live of 10 seconds
    CacheModule.register({
      ttl: 10,
    }),
  ],
  providers: [RssService],
  exports: [RssService],
  controllers: [RssController],
})
export class RssModule {}
