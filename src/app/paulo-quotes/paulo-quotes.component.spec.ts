import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PauloQuotesComponent } from './paulo-quotes.component';

describe('PauloQuotesComponent', () => {
  let component: PauloQuotesComponent;
  let fixture: ComponentFixture<PauloQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PauloQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PauloQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
