import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexLaunchesComponent } from './spacex-launches.component';

describe('SpacexLaunchesComponent', () => {
  let component: SpacexLaunchesComponent;
  let fixture: ComponentFixture<SpacexLaunchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexLaunchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
