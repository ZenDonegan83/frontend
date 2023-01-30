import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSessionDetailsComponent } from './full-session-details.component';

describe('FullSessionDetailsComponent', () => {
  let component: FullSessionDetailsComponent;
  let fixture: ComponentFixture<FullSessionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullSessionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullSessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
