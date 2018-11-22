export interface IFeed {
  status: string;
  items: Array<{
    title: string;
    link: string;
    description: string;
    thumbnail: string;
  }>;
}
