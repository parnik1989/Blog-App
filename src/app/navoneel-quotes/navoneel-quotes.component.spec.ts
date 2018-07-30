import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavoneelQuotesComponent } from './navoneel-quotes.component';

describe('NavoneelQuotesComponent', () => {
  let component: NavoneelQuotesComponent;
  let fixture: ComponentFixture<NavoneelQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavoneelQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavoneelQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
