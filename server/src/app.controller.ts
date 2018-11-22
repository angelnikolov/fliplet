import { Controller, Get, Res } from '@nestjs/common';
import * as path from 'path';
@Controller()
export class AppController {
  constructor() {}

  @Get()
  root(@Res() response): void {
    // the homepage will load our index.html which contains angular logic
    response.sendFile(path.resolve('../client/dist/index.html'));
  }
}
