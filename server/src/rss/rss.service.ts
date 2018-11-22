import { Injectable } from '@nestjs/common';
import * as fetch from 'node-fetch';
@Injectable()
export class RssService {
  constructor() {}
  get(rss_url: string) {
    console.log(
      'Calling the endpoint..., this should be called twice in a 10 sec period',
    );
    return fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${rss_url}`,
    ).then(response => response.json());
  }
}
