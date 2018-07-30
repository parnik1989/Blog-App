import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BachQuotesComponent } from './bach-quotes.component';

describe('BachQuotesComponent', () => {
  let component: BachQuotesComponent;
  let fixture: ComponentFixture<BachQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BachQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
