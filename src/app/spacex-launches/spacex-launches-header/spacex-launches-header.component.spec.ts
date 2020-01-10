import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexLaunchesHeaderComponent } from './spacex-launches-header.component';

describe('SpacexLaunchesHeaderComponent', () => {
  let component: SpacexLaunchesHeaderComponent;
  let fixture: ComponentFixture<SpacexLaunchesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexLaunchesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexLaunchesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
