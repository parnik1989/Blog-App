import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnecdoteMovievsbooksComponent } from './anecdote-movievsbooks.component';

describe('AnecdoteMovievsbooksComponent', () => {
  let component: AnecdoteMovievsbooksComponent;
  let fixture: ComponentFixture<AnecdoteMovievsbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnecdoteMovievsbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnecdoteMovievsbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
