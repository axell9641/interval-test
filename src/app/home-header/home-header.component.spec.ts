import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Subject } from 'rxjs';
import { HomeTimerState } from '../home-timer-state.service';

import { HomeHeaderComponent } from './home-header.component';

describe('HomeHeaderComponent', () => {
  let component: HomeHeaderComponent;
  let fixture: ComponentFixture<HomeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeHeaderComponent],
      providers: [
        HomeTimerState
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should emit event when state is complete', fakeAsync(() => {
  //   let eventWasEmitted = false;
  //   component.completeTimer.subscribe(_ => eventWasEmitted = true);

  //   tick(310000);

  //   expect(eventWasEmitted).toBeTruthy();
  // }));

  it('should emit event when state is complete', fakeAsync (() => {
    const service = TestBed.inject(HomeTimerState);
    service.startInterval();
    const spy = spyOn(component.completeTimer, 'emit');

    tick(310000);

    expect(spy).toHaveBeenCalled();
  }));
});
