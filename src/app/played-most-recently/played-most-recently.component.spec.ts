import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayedMostRecentlyComponent } from './played-most-recently.component';

describe('PlayedMostRecentlyComponent', () => {
  let component: PlayedMostRecentlyComponent;
  let fixture: ComponentFixture<PlayedMostRecentlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayedMostRecentlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayedMostRecentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
