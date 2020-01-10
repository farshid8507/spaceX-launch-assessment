import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexLaunchesComponent } from './spacex-launches.component';
import { SpacexLaunchesHeaderComponent } from './spacex-launches-header/spacex-launches-header.component';
import { CustomCheckboxComponent } from './share/custom-checkbox/custom-checkbox.component';
import { SpacexLaunchesListComponent } from './spacex-launches-list/spacex-launches-list.component';
import { SpacexLaunchesListItemComponent } from './spacex-launches-list-item/spacex-launches-list-item.component';

@NgModule({
  declarations: [
    SpacexLaunchesComponent,
    SpacexLaunchesHeaderComponent,
    CustomCheckboxComponent,
    SpacexLaunchesListComponent,
    SpacexLaunchesListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [SpacexLaunchesComponent],
})
export class SpacexLaunchesModule { }
