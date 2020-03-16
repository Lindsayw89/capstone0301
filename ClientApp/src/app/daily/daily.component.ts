import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Exercise} from '../workout/workout.component';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {PopupWorkoutComponent} from '../popup-workout/popup-workout.component';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
public dailyWorkouts:WorkoutExercise[];
@Input() newDWorkout:Workout = {id: undefined, title: '', description: '',   workoutDay:new Date(),  workoutExercises:  [] }
public workouts: Workout[];



  constructor(private http: HttpClient,
     @Inject('BASE_URL') private baseUrl: string,
     private _bottomSheet: MatBottomSheet) { }

  async ngOnInit() {

    // this.dailyWorkouts = await this.http.get<WorkoutExercise[]>(this.baseUrl + 'workoutexercises').toPromise();
    // console.log(this.dailyWorkouts); //FIX
    this.refreshTable();
    console.log(this.workouts);
  
  }
  test(dw:Workout){
    //console.log(dw.workoutExercises.map(we=>we.exercise));
  }

  openBottomSheet(dw:Workout): void {
    this._bottomSheet.open(PopupWorkoutComponent, {data: {workout: dw, selfPass: this}});
  }
 
  async saveDay() {
    console.log(this.newDWorkout);
    await this.http.post<Workout[]>(this.baseUrl + 'workout', this.newDWorkout).toPromise();
    this.newDWorkout = {id: undefined, title: '', description: '', workoutDay: new Date(),    workoutExercises:  []  }
   this.refreshTable();
}
public async refreshTable(){
  this.workouts = await this.http.get<Workout[]>(this.baseUrl + 'workout').toPromise();
  console.log("pop");
  console.log(this.workouts);
}


}
export interface WorkoutExercise {
  id: number;
  workout: Workout;  // not sure if these 2 should be arrays or not
  exercise: Exercise;
 
 
}
export interface Workout {
  id: number;
  title: string;
  description: string;
  workoutDay: Date;
  workoutExercises: WorkoutExercise[]; 
 
}
