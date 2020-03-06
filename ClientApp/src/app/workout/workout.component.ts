import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatInput} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {MatFormFieldControl} from '@angular/material';

@Component({
  selector: 'app-workout',  
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  public exercises: Exercise[];
  public newWorkout: Exercise = { title: '', description: '', workoutType:0, calories:0,  id: 0}


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

 async  ngOnInit() {
    this.exercises = await this.http.get<Exercise[]>(this.baseUrl + 'exercise').toPromise();
  }

  async saveWorkout() {
    console.log(this.newWorkout);
    await this.http.post<Exercise[]>(this.baseUrl + 'exercise', this.newWorkout).toPromise();
    this.newWorkout = { title: '', description: '', workoutType:0, calories:0 , id: 0};
    this.exercises = await this.http.get<Exercise[]>(this.baseUrl + 'exercise').toPromise();

}

async deleteWorkout(id:number) {
  
  await this.http.delete<Exercise>(this.baseUrl + 'exercise/' + id).toPromise();

  this.exercises = await this.http.get<Exercise[]>(this.baseUrl + 'exercise').toPromise();

}


}

interface Exercise {
  title: string;
  description: string;
  workoutType: number;
  calories: 0;
workoutTypeId: number
  id: number;

}
