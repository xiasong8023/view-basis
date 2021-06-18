import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyMarkdownComponent } from './readonly-markdown.component';

describe('ReadonlyMarkdownComponent', () => {
  let component: ReadonlyMarkdownComponent;
  let fixture: ComponentFixture<ReadonlyMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadonlyMarkdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
