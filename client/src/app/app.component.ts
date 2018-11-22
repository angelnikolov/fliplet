import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { RssService } from './core/services/rss.service';
import { IFeed } from './shared/interfaces/IFeed';
declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  feed$: Observable<Array<IFeed>>;
  loading = false;
  isOnline = true;

  constructor(private rssService: RssService) {
    alert('hey!');
    window.addEventListener(
      'online',
      () => {
        console.log('online');
        alert('Online');
        this.isOnline = true;
      },
      false
    );
    window.addEventListener(
      'offline',
      () => {
        console.log('offline');
        alert('Offline!');
        this.isOnline = false;
      },
      false
    );
  }

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
