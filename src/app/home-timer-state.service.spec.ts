/* tslint:disable:no-unused-variable */

import {
  discardPeriodicTasks,
  fakeAsync,
  flush,
  flushMicrotasks,
  TestBed,
  tick,
} from '@angular/core/testing';
import { HomeTimerState } from './home-timer-state.service';

describe('Service: HomeTimerState', () => {
  let homeService: HomeTimerState;
  let localState: any;
  beforeEach(() => {
    homeService = new HomeTimerState();
  });
  it('should emit values with a default visibility of show when service is initilized', fakeAsync(() => {
    homeService.startInterval();
    homeService.state$.subscribe((s) => (localState = s));

    tick(1000);
    discardPeriodicTasks();

    expect(localState).toEqual({
      state: 'show',
      miliseconds: 299,
    });
  }));

  it('should emit values with a visibility of complete after 301 milliseconds have elapsed', fakeAsync(() => {

    homeService.startInterval();
    homeService.state$.subscribe((s) => (localState = s));

    tick(301000);
    // flush();
    expect(localState).toEqual({
      state: 'complete',
      miliseconds: -1,
    });
  }));

  it('should emit hidden', fakeAsync(() => {
    let localState: any;
    homeService = new HomeTimerState();
    homeService.state$.subscribe((s) => (localState = s));

    homeService.close();
    flush();
    discardPeriodicTasks();

    expect(localState.state).toBe('hidden');
  }));

  it('should emit show', fakeAsync(() => {
    let localState: any;
    homeService = new HomeTimerState();
    homeService.state$.subscribe((s) => (localState = s));

    homeService.show();
    flush();
    discardPeriodicTasks();

    expect(localState.state).toBe('show');
  }));
});
