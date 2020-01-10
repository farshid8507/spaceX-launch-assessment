import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexLaunchesListComponent } from './spacex-launches-list.component';

describe('SpacexLaunchesListComponent', () => {
  let component: SpacexLaunchesListComponent;
  let fixture: ComponentFixture<SpacexLaunchesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexLaunchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexLaunchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
