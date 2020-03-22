import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Exercise} from '../workout/workout.component';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
totalCalories: Exercise;
exercises: Exercise[];

constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}


 async ngOnInit(){

  this.exercises = await this.http.get<Exercise[]>(this.baseUrl + 'exercise').toPromise();
}

   addCalories(total, num){
    let sum= total+num;
    return sum;

  }


}
