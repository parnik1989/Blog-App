import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnecdoteSchoolComponent } from './anecdote-school.component';

describe('AnecdoteSchoolComponent', () => {
  let component: AnecdoteSchoolComponent;
  let fixture: ComponentFixture<AnecdoteSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnecdoteSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnecdoteSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
