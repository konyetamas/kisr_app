import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDatasComponent } from './activity-datas.component';

describe('ActivityDatasComponent', () => {
  let component: ActivityDatasComponent;
  let fixture: ComponentFixture<ActivityDatasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityDatasComponent]
    });
    fixture = TestBed.createComponent(ActivityDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
