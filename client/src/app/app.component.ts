import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { RssService } from './core/services/rss.service';
import { IFeed } from './shared/interfaces/IFeed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  feed$: Observable<Array<IFeed>>;
  loading = false;

  constructor(private rssService: RssService) {}

  ngOnInit(): void {}

  getRss(url: string) {
    this.loading = true;
    this.feed$ = this.rssService.getFeed(url).pipe(
      map(response => response.items),
      map(items =>
        items.map(item => ({
          link: item.link,
          title: item.title,
          description: item.description,
          thumbnail: item.thumbnail
        }))
      ),
      finalize(() => (this.loading = false)),
      tap(console.log)
    );
  }
}
