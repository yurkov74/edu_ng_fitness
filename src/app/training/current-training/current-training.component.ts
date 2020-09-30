import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// app components
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingStop = new EventEmitter<void>();
  progress = 0;
  timer;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress >= 100 ) clearInterval(this.timer); 
    }, 200);
  }

  onStop() {
    clearInterval(this.timer);
    this.dialog.open(StopTrainingComponent);
  }

}
