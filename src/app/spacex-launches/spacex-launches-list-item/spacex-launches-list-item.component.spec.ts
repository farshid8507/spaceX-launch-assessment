import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexLaunchesListItemComponent } from './spacex-launches-list-item.component';

describe('SpacexLaunchesListItemComponent', () => {
  let component: SpacexLaunchesListItemComponent;
  let fixture: ComponentFixture<SpacexLaunchesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexLaunchesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexLaunchesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
