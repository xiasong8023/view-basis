import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBasicComponent } from './view-basic.component';

describe('ViewBasicComponent', () => {
  let component: ViewBasicComponent;
  let fixture: ComponentFixture<ViewBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
