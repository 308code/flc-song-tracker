import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayedCreateComponent } from './played-create.component';

describe('PlayedCreateComponent', () => {
  let component: PlayedCreateComponent;
  let fixture: ComponentFixture<PlayedCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayedCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayedCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
