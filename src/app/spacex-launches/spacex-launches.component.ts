import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../core/http/api.service';
import { SpacexLaunchesFilter } from './share/interface/spacex-launches-filter';
import { FILTERS } from './share/constant/spacex-launches.const';
import { CheckboxDataService } from '../core/data/checkbox-data.service';

@Component({
  selector: 'app-spacex-launches',
  templateUrl: './spacex-launches.component.html',
  styleUrls: ['./spacex-launches.component.less']
})
export class SpacexLaunchesComponent implements OnInit, OnDestroy {
  spaceXDataList: any[] = [];
  immutableSpaceXDataList: any[] = [];
  filterList = new Set();
  getSpaceXDataSubscription: Subscription;

  constructor(private apiService: ApiService, private checkboxDataService: CheckboxDataService) { }

  ngOnInit() {
    this.getSpaceXLaunchesData();
  }

  getSpaceXLaunchesData() {

    this.getSpaceXDataSubscription =
      this.apiService.getSpaceXData().subscribe(list => {

        this.spaceXDataList = list;
        this.immutableSpaceXDataList = [...this.spaceXDataList];
        Object.freeze(this.immutableSpaceXDataList);
      });

    this.filterList.clear();
    this.checkboxDataService.clearFilters();
  }

  setSelectedFilter(selectedFilter: SpacexLaunchesFilter) {

    if (selectedFilter.value) {
      this.filterList.add(selectedFilter.name);
    } else {
      this.filterList.delete(selectedFilter.name);
    }

    this.filterResult();
  }

  filterResult(): void {
    let filteredData = [...this.immutableSpaceXDataList];

    if (this.filterList.has(FILTERS.WITH_REDDIT)) {
      filteredData = [...this.filterByReddit(filteredData)];
    }

    if (this.filterList.has(FILTERS.REUSED)) {
      filteredData = [...this.filterByReused(filteredData)];
    }

    if (this.filterList.has(FILTERS.LAND_SUCCESS)) {
      filteredData = [...this.filterByLandSuccess(filteredData)];
    }

    this.spaceXDataList = this.filterList.size > 0 ? filteredData : this.immutableSpaceXDataList;
  }

  filterByReddit(dataList: any): any[] {
    return dataList.filter(item => {

      for (let linkKey in item.links) {

        if (linkKey.includes('reddit') && item.links[linkKey] != null) {
          return item;
        };
      }
    });
  }

  filterByReused(dataList: any): any[] {
    return dataList.filter(item => {

      for (let reuseKey in item.reuse) {

        if (item.reuse[reuseKey] === true) {
          return item;
        };
      }
    });
  }

  filterByLandSuccess(dataList: any): any[] {
    return dataList.filter(item => item.rocket.first_stage.cores[0].land_success);
  }

  ngOnDestroy() {
    this.getSpaceXDataSubscription && this.getSpaceXDataSubscription.unsubscribe();
  }
}
