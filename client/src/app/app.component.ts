import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RssService } from './core/services/rss.service';
import { IFeed } from './shared/interfaces/IFeed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  feed$: Observable<Array<IFeed>>;
  constructor(private rssService: RssService) {}
  ngOnInit(): void {
    this.feed$ = this.rssService.getFeed('http://fliplet.net/feed').pipe(
      map(response => response.items),
      map(items =>
        items.map(item => ({
          link: item.link,
          title: item.title,
          description: item.description
        }))
      ),
      tap(console.log)
    );
  }
}
