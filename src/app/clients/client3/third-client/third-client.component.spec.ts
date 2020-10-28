import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdClientComponent } from './third-client.component';

describe('ThirdClientComponent', () => {
  let component: ThirdClientComponent;
  let fixture: ComponentFixture<ThirdClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
