import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDatasComponent } from './basic-datas.component';

describe('BasicDatasComponent', () => {
  let component: BasicDatasComponent;
  let fixture: ComponentFixture<BasicDatasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicDatasComponent]
    });
    fixture = TestBed.createComponent(BasicDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
