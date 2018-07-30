import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksToBuyComponent } from './books-to-buy.component';

describe('BooksToBuyComponent', () => {
  let component: BooksToBuyComponent;
  let fixture: ComponentFixture<BooksToBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksToBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksToBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
