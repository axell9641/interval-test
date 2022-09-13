import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeTimerState } from '../home-timer-state.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  @Input() fullWidth = false;

  @Input() showTimer = false;

  @Input() backButton = true;

  @Input() textButton = 'Volver';

  @Output() clickbutton = new EventEmitter<string>();

  timeHome: number = 0;

  @Output() completeTimer = new EventEmitter<void>();
  constructor(public readonly timer: HomeTimerState) { }

  ngOnInit(): void {
    this.timer.state$.subscribe(state => {
      if (state.state === 'complete') {
        this.completeTimer.emit();

        return;
      }
      this.timeHome = state.miliseconds;
    });
  }

}
