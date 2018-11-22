import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IFeed } from '../../shared/interfaces/IFeed';

@Injectable({
  providedIn: 'root'
})
export class RssService {
  constructor(private http: HttpClient) {}

  getFeed(url: string) {
    let params = new HttpParams();
    params = params.set('rss_url', url);
    return this.http.get<IFeed>(`${environment.API_URL}/rss`, { params });
  }
}
