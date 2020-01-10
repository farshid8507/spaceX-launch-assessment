import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckboxDataService {

  private resetFiltersSubject = new BehaviorSubject(undefined);
  resetFilters$ = this.resetFiltersSubject.asObservable();

  clearFilters(): void {
    this.resetFiltersSubject.next(true);
  }
}
