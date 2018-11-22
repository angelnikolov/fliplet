import {
  CacheInterceptor,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { RSSQueryDto } from './dtos/rss-query.dto';
import { RssService } from './rss.service';

@Controller()
@UseInterceptors(CacheInterceptor) // use the caching interceptor so we cache all requests originating from this controller
export class RssController {
  constructor(private readonly rssService: RssService) {}
  @Get('/api/rss')
  findAll(@Query() query: RSSQueryDto) {
    return this.rssService.get(query.rss_url);
  }
}
