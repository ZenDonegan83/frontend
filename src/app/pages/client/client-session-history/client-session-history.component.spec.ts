import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSessionHistoryComponent } from './client-session-history.component';

describe('ClientSessionHistoryComponent', () => {
  let component: ClientSessionHistoryComponent;
  let fixture: ComponentFixture<ClientSessionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSessionHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSessionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
