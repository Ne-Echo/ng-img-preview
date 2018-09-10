import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopPreviewComponent } from './pop-preview.component';

describe('PopPreviewComponent', () => {
  let component: PopPreviewComponent;
  let fixture: ComponentFixture<PopPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
