import { Component, Input, OnInit } from '@angular/core';
import { IFeedItem } from '../../interfaces/IFeed';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() feedItem: IFeedItem;
  constructor() {}

  ngOnInit() {}
}
