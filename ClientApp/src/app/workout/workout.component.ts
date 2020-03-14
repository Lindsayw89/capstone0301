import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatInput} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {MatFormFieldControl} from '@angular/material';
import {Workout} from '../daily/daily.component';
import { FormBuilder, FormGroup  } from '@angular/forms';


@Component({
  selector: 'app-workout',  
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  public exercises: Exercise[];
  public newExercise: Exercise = {id: undefined, title: '', description: '', exerciseTypeId:undefined,  workoutType:undefined ,  workoutExercises:  [] ,calories:0 }
 public ET: ExerciseType[];
  exerciseForm: FormGroup;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private formBuilder: FormBuilder,) { 
    this.exerciseForm= this.formBuilder.group({
      title:"",
      description:"",
      exerciseType:0,
      workoutType: 0,
      calories:0


    });
  }

 async  ngOnInit() {
    this.exercises = await this.http.get<Exercise[]>(this.baseUrl + 'exercise').toPromise();
    this.ET= await this.http.get<ExerciseType[]>(this.baseUrl +'exerciseTypes').toPromise();
  
  // console.log(this.newExercise.workoutType.title + "newex worktyp tit")
  // console.log(this.newExercise.workoutExercises + " new ex  workouexer")
  // console.log(this.newExercise.exerciseTypeId + "newex extypeid")


}

  async saveWorkout() {
    console.log(this.newExercise);
    await this.http.post<Exercise[]>(this.baseUrl + 'exercise', this.newExercise).toPromise();
    this.newExercise = {id: undefined, title: '', description: '', exerciseTypeId:undefined,  workoutType:undefined,  workoutExercises:  [] ,calories:0 }
    this.exercises = await this.http.get<Exercise[]>(this.baseUrl + 'exercise').toPromise();

}

async deleteWorkout(id:number) {
  
  await this.http.delete<Exercise>(this.baseUrl + 'exercise/' + id).toPromise();

  this.exercises = await this.http.get<Exercise[]>(this.baseUrl + 'exercise').toPromise();

}

}

export interface ExerciseType {
  id: number;
  title: string;
}

export interface Exercise {
  id: number;
  title: string;
  description: string;
  exerciseTypeId : number;
  workoutType: ExerciseType;
  workoutExercises: Workout[]
  calories: number;
}

