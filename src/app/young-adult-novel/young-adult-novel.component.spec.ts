import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungAdultNovelComponent } from './young-adult-novel.component';

describe('YoungAdultNovelComponent', () => {
  let component: YoungAdultNovelComponent;
  let fixture: ComponentFixture<YoungAdultNovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoungAdultNovelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoungAdultNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
