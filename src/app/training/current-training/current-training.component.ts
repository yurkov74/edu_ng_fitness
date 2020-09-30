import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingStop = new EventEmitter<void>();
  progress = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.progress++;
      if (this.progress === 100 ) this.onStop(); 
    }, 200);
  }

  onStop() { this.trainingStop.emit(); }

}
