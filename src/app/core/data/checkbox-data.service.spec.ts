import { TestBed } from '@angular/core/testing';

import { CheckboxDataService } from './checkbox-data.service';

describe('CheckboxDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckboxDataService = TestBed.get(CheckboxDataService);
    expect(service).toBeTruthy();
  });
});
