import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-spacex-launches-list',
  templateUrl: './spacex-launches-list.component.html',
  styleUrls: ['./spacex-launches-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpacexLaunchesListComponent {
  @Input() dataList: any;
}
