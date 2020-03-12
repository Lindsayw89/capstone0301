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
@Input() newDWorkout:WorkoutExercise;
public workouts: Workout[];


  constructor(private http: HttpClient,
     @Inject('BASE_URL') private baseUrl: string,
     private _bottomSheet: MatBottomSheet) { }

  async ngOnInit() {

    // this.dailyWorkouts = await this.http.get<WorkoutExercise[]>(this.baseUrl + 'workoutexercises').toPromise();
    // console.log(this.dailyWorkouts); //FIX
    this.workouts= await this.http.get<Workout[]>(this.baseUrl +'workout').toPromise();
    console.log(this.workouts);
  
  }
  test(dw:Workout){
    //console.log(dw.workoutExercises.map(we=>we.exercise));
  }

  openBottomSheet(dw:Workout): void {
    this._bottomSheet.open(PopupWorkoutComponent, {data: dw});
  }



  // async addDaily(){
  //   await this.http.post<Workout[]>(this.baseUrl + 'workout', this.newDWorkout).toPromise();
  //   this.newDWorkout={ title: '', description: '', workoutType:'', calories:0 , workoutDate: new Date(), id: 0};
  //   this.todayWorkouts= await this.http.get<Workout[]>(this.baseUrl +'workout').toPromise(); // FIX

 // }

}
export interface WorkoutExercise {
  id: number;
  workout: Workout;
  exercise: Exercise;
 
 
}
export interface Workout {
  id: number;
  title: string;
  description: string;
  workoutDay: Date;
  workoutExercises: WorkoutExercise[]; 
 
}
