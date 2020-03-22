import { Component, OnInit, Inject,ChangeDetectorRef } from '@angular/core';
import{ DailyComponent, Workout, WorkoutExercise} from '../daily/daily.component';
import {MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {WorkoutComponent} from '../workout/workout.component';
import { HttpClient } from '@angular/common/http';

import {Exercise} from '../workout/workout.component';

@Component({
  selector: 'app-popup-workout', 
  templateUrl: './popup-workout.component.html',
  styleUrls: ['./popup-workout.component.css']
})
export class PopupWorkoutComponent implements OnInit {
  public exercises: Exercise[] = [];

  public exercise: Exercise; // might not need
 
  public newExerciseAdd: WorkoutExercise;
 public workout: Workout;
 public daily: DailyComponent;
 public showExercise=false;

  constructor(private _bottomSheetRef: MatBottomSheetRef<PopupWorkoutComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA)public data: any,
    private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,private Cdr: ChangeDetectorRef) { }



  async ngOnInit() {
    this.workout=this.data.workout;
    this.daily=this.data.selfPass;

    console.log("selfpass");
    console.log(this.data.selfPass);
    console.log("workout");
    console.log(this.data.workout);
    this.resetExercise();
    this._bottomSheetRef.afterDismissed().subscribe(()=>
    this.daily.refreshTable());


this.exercises = await this.http.get<Exercise[]>(this.baseUrl + 'exercise').toPromise();
this.Cdr.detectChanges();
   
  }

  
openLink(event: MouseEvent): void {
  this.daily.refreshTable();
  this._bottomSheetRef.dismiss();
  event.preventDefault();
}



async showExercises() {
this.showExercise=true;
 

}
async hideExercises(){
  this.showExercise=false;
}

async addExerciseToDay(exercise: Exercise){

  console.log(this.newExerciseAdd);
  this.newExerciseAdd.exercise =exercise;

  await this.http.post<WorkoutExercise[]>(this.baseUrl + 'WorkoutExercises', this.newExerciseAdd).toPromise();
   this.resetExercise();
   // workout and exer might need to be undefined
   this.exercises = await this.http.get<Exercise[]>(this.baseUrl + 'exercise').toPromise();
   this.workout= await this.http.get<Workout>(this.baseUrl +'workout/' + this.workout.id).toPromise();
   console.log(this.workout);
   this.Cdr.detectChanges();
}

resetExercise(){
  this.newExerciseAdd = {id: undefined, exercise: undefined,  workout: this.workout };
}



}
