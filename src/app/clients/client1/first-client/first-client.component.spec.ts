import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstClientComponent } from './first-client.component';

describe('FirstClientComponent', () => {
  let component: FirstClientComponent;
  let fixture: ComponentFixture<FirstClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
