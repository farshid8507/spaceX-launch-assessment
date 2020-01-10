import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-spacex-launches-list-item',
  templateUrl: './spacex-launches-list-item.component.html',
  styleUrls: ['./spacex-launches-list-item.component.less']
})
export class SpacexLaunchesListItemComponent {
  @Input() listItem: any;

  formatLaunchedDate(unixDate: number): string {
    return moment(unixDate * 1000).format("MM/DD/YY");
  }

  openArticle(item: any): void {
    window.open(item.links.article_link, "_blank");
  }
}
