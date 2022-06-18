import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  interval = 0;
  lastNumber = 0;
  @Output() intervalFired = new EventEmitter<number>();
  @Output() pauseFired = new EventEmitter<number>();
  constructor() {}
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 100);
  }
  onPauseGame() {
    clearInterval(this.interval);
  }
  ngOnInit(): void {}
}
