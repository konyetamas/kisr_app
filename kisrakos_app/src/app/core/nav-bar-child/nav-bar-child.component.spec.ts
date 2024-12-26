import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarChildComponent } from './nav-bar-child.component';

describe('NavBarChildComponent', () => {
  let component: NavBarChildComponent;
  let fixture: ComponentFixture<NavBarChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarChildComponent ]
    })
    .compileComponents(); 
    fixture = TestBed.createComponent(NavBarChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
