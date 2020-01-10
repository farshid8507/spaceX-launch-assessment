import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FILTERS } from '../share/constant/spacex-launches.const';
import { SpacexLaunchesFilter } from '../share/interface/spacex-launches-filter';

@Component({
  selector: 'app-spacex-launches-header',
  templateUrl: './spacex-launches-header.component.html',
  styleUrls: ['./spacex-launches-header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpacexLaunchesHeaderComponent {
  FILTERS = FILTERS;
  
  @Output() selectedFilter = new EventEmitter<SpacexLaunchesFilter>();
  @Output() reloadList = new EventEmitter<boolean>();

  emitSelectedFilter(filterName: string, filterValue: boolean): void {
    this.selectedFilter.emit({name: filterName, value: filterValue});
  }

  reloadData(): void {
    this.reloadList.emit(true);
  }
}
