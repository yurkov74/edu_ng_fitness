import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  exercises = [
    {key: 'burpees', name: 'Burpees'},
    {key: 'crunches', name: 'Crunches'},
    {key: 'jogging', name: 'Jogging'},
    {key: 'side-lunges', name: 'Side lunges'},
    {key: 'touch-toes', name: 'Touch Toes'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
