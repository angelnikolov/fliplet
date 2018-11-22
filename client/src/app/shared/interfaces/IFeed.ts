export interface IFeed {
  status: string;
  items: Array<IFeedItem>;
}

export interface IFeedItem {
  title: string;
  link: string;
  description: string;
  thumbnail: string;
}
