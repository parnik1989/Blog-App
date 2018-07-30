import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnecdoteCollegeComponent } from './anecdote-college.component';

describe('AnecdoteCollegeComponent', () => {
  let component: AnecdoteCollegeComponent;
  let fixture: ComponentFixture<AnecdoteCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnecdoteCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnecdoteCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
