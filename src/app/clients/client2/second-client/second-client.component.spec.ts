import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondClientComponent } from './second-client.component';

describe('SecondClientComponent', () => {
  let component: SecondClientComponent;
  let fixture: ComponentFixture<SecondClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
