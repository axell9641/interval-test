import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface TimerState {
  state: 'show' | 'hidden' | 'complete';
  miliseconds: number;
}

const defaultState = {
  state: 'show',
  miliseconds: 300,
};

@Injectable({
  providedIn: 'root',
})
export class HomeTimerState {
  state = new BehaviorSubject(defaultState);

  readonly state$ = this.state.asObservable();
  private interval: any;
  constructor() {


  }

  startInterval() {
    this.interval = window.setInterval(() => {
      const currentState = this.state.value;
      let visibility = 'show';
      if (currentState.miliseconds === 0) {
        visibility = 'complete';
        window.clearInterval(this.interval);
      }

      this.state.next({
        state: visibility,
        miliseconds: (currentState.miliseconds - 1)
      })
    }, 1000);
  }

  close() {
    this.state.next({
      ...defaultState,
      state: 'hidden'
    });
  }

  show() {
    this.state.next({
      ...defaultState,
      state: 'show'
    });
  }
}
