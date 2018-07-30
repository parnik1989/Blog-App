import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterCommComponent } from './inter-comm.component';

describe('InterCommComponent', () => {
  let component: InterCommComponent;
  let fixture: ComponentFixture<InterCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
