import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CheckboxDataService } from '../../../core/data/checkbox-data.service';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCheckboxComponent implements OnInit {

  checked: boolean = false;

  @Input() label: string;
  @Output() selected = new EventEmitter<boolean>();

  constructor(private checkboxDataService: CheckboxDataService) { }

  ngOnInit() {
    this.checkboxDataService.resetFilters$.subscribe(reset => {

      if(reset) {
        this.checked = false;
        this.selected.emit(this.checked);
      }
  
    })
  }

  onCheckboxChange(): void {
    this.checked = !this.checked;

    this.selected.emit(this.checked);
  }

}
