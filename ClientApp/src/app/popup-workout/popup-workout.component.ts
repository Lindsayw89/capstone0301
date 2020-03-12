import { Component, OnInit, Inject } from '@angular/core';
import{ DailyComponent, Workout} from '../daily/daily.component';
import {MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {WorkoutComponent} from '../workout/workout.component';

@Component({
  selector: 'app-popup-workout',
  templateUrl: './popup-workout.component.html',
  styleUrls: ['./popup-workout.component.css']
})
export class PopupWorkoutComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<PopupWorkoutComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA)public workout: Workout) { }



  ngOnInit() {
    console.log(this.workout);
  }

  
openLink(event: MouseEvent): void {
  this._bottomSheetRef.dismiss();
  event.preventDefault();
}
}
