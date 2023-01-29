import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSessionHistoryComponent } from './artist-session-history.component';

describe('ArtistSessionHistoryComponent', () => {
  let component: ArtistSessionHistoryComponent;
  let fixture: ComponentFixture<ArtistSessionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSessionHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistSessionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
