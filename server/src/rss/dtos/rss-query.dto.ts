import { IsDefined, IsString } from 'class-validator';

export class RSSQueryDto {
  @IsDefined()
  @IsString()
  rss_url: string;
}
